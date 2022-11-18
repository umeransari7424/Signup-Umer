import './App.scss';
import Signup from './Components/Elements/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route , useNavigate } from "react-router-dom";
import {useEffect,useState} from 'react';
import { doc, setDoc, } from "firebase/firestore"; 
import {db} from './firebase';
import {getAuth ,signInWithEmailAndPassword , createUserWithEmailAndPassword ,sendPasswordResetEmail} from 'firebase/auth'; 
import Home from './Components/Elements/Home';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loginform from './Components/Elements/Login';
import Resetpassword from './Components/Elements/Resetpassword';
import Userdata from './Components/Elements/Userdata';
import Update from './Components/Elements/Update';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { uploadBytes } from 'firebase/storage';
import {storage} from './firebase'
import Upload from './Components/Elements/Upload';

function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  const [contact,setContact] = useState("");
  const [address,setAddress] = useState("");
  const [file,setFile] = useState("");
  const [progress,setProgress] = useState(0);;

  const handleFileChange = (e) => {

    const storage = getStorage();
    const storageRef = ref(storage, 'images/');
    
    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

    
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
    (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress)
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setFile(`images/${downloadURL}`)
                });
            }
            );
        }

  const navigate = useNavigate();
  
  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");
    if (authToken) {
      navigate("/home");
    }
  }, [navigate]);

  const handleAction =(id) => {
    const authenticate = getAuth();
    // const user = authenticate.currentUser;
    if (id===2){
      createUserWithEmailAndPassword(authenticate,email,password).then((response)=>{
        navigate("/login");
        // sessionStorage.setItem("auth", response._tokenResponse.refreshToken);
        // const uid = user.uid;
        
        setDoc(doc(db, "users",response.user.uid), {
        uid:response.user.uid,
        name:name,
        img:setFile,
        contact:contact,
        address:address,
        email:email,
        password:password,
        });
    //     if(uploadFile == null) return;
    // 

      }).catch((e) => {
        if (e.code === "auth/wrong-password") {
          toast.error("please check the password");
        }
        if (e.code === "auth/user-not-found") {
          toast.error("please check the email");
        }
      });
  };
  
    
  if (id === 1) {
    signInWithEmailAndPassword(authenticate, email, password)
      .then((response) => {
        navigate("/home");
        sessionStorage.setItem("auth", response._tokenResponse.refreshToken);
        // console.log(response.user.uid,email,password)
        
      })
      .catch((e) => {
        if (e.code === "auth/wrong-address") {
          toast.error("please check the password");
        }
        if (e.code === "auth/user-not-found") {
          toast.error("please check the email");
        }
      });
  }
};
const forgetPassword=()=>{
  navigate('/resetpassword')
  
}

const resetAction=()=>{
  
  const authenticate = getAuth();
  sendPasswordResetEmail(authenticate, email)
    .then(() => {
      console.log('email sent successfully')
      toast({
        title :'Email sent successfully',
        status : 'success',
    
      })
     

    })
    .catch((error) => {
      console.log(error);
      
    });
  

}

  
  return (
    <div >
     
    <ToastContainer />
        <Routes>
          <Route path='/home' element={<Home/>} ></Route>
          <Route path='/userdata' element={<Userdata/>} />
          <Route path='/upload' element={<Upload/>} />
          <Route path='/update/:id' element={<Update/>} />
          <Route index  path="/" element={<Signup  
          setEmail={setEmail} 
          setName={setName}
          setContact={setContact}
          handleFileChange={handleFileChange}
          setAddress={setAddress}
          setPassword={setPassword} 
          handleAction={()=>handleAction(2)}
           title={"Register"}
            />}
           />
          <Route  path="/login" element={<Loginform 
          setEmail={setEmail} 
          setPassword={setPassword}
           handleAction={()=>handleAction(1)} 
           forgetPassword={()=>forgetPassword()}
           title={"Login"} 
           />} />
          <Route path='/resetpassword' element={<Resetpassword
          title={"Reset Password"}
          setEmail={setEmail}
          resetAction={()=>resetAction()}
          />} 
          />
          
        </Routes>
   
    </div>
  );
}

export default App;
