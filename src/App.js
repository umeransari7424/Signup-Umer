import './App.scss';
import Signup from './Components/Elements/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route , useNavigate } from "react-router-dom";
import {useEffect,useState} from 'react';
// import Login from './Components/Elements/Login';
// eslint-disable-next-line
import {app} from './firebase';
import {getAuth ,signInWithEmailAndPassword , createUserWithEmailAndPassword} from 'firebase/auth'; 
import Home from './Components/Elements/Home';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");
    if (authToken) {
      navigate("/home");
    }
  }, [navigate]);

  const handleAction =(id) => {
    const authenticate = getAuth();
    if (id===2){
      createUserWithEmailAndPassword(authenticate,email,password).then((response)=>{
        navigate("/login");
        // sessionStorage.setItem("auth", response._tokenResponse.refreshToken);

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
      })
      .catch((e) => {
        if (e.code === "auth/wrong-password") {
          toast.error("please check the password");
        }
        if (e.code === "auth/user-not-found") {
          toast.error("please check the email");
        }
      });
  }
};
  
  return (
    <div >
    <ToastContainer />
        <Routes>
          <Route path='/home' element={<Home/>} ></Route>
          <Route  path="/" element={<Signup  
          setEmail={setEmail} 
          setPassword={setPassword} 
          handleAction={()=>handleAction(2)}
           title={"Register"}
            />}
           />
          <Route  path="/login" element={<Signup  
          setEmail={setEmail} 
          setPassword={setPassword}
           handleAction={()=>handleAction(1)} 
           title={"Login"} 
           />} />

          {/* <Route path="/login" element={<Login setEmail={setEmail} setPassword={setPassword} handleAction={()=>handleAction(2)}  />} /> */}
        </Routes>
   
    </div>
  );
}

export default App;
