import './App.scss';
import Signup from './Components/Elements/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route , useNavigate } from "react-router-dom";
import {useEffect,useState} from 'react';
// import Loginform from './Components/Elements/Login';

// import {app} from './firebase';
import { doc, setDoc, } from "firebase/firestore"; 

import db from './firebase';
import {getAuth ,signInWithEmailAndPassword , createUserWithEmailAndPassword ,sendPasswordResetEmail} from 'firebase/auth'; 
import Home from './Components/Elements/Home';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loginform from './Components/Elements/Login';
import Resetpassword from './Components/Elements/Resetpassword';
// import Reset from './Components/Elements/Reset';

function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  const [contact,setContact] = useState("");
  const [address,setAddress] = useState("");

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
        contact:contact,
        address:address,
        email:email,
        password:password,
        });

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
          <Route path='/home' element={<Home
        
          
         
          />} ></Route>

          <Route index  path="/" element={<Signup  
          setEmail={setEmail} 
          setName={setName}
          setContact={setContact}
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
          {/* <Route path='/reset' element={<Reset/>}/> */}

          {/* <Route path="/login" element={<Login setEmail={setEmail} setPassword={setPassword} handleAction={()=>handleAction(2)}  />} /> */}
        </Routes>
   
    </div>
  );
}

export default App;
