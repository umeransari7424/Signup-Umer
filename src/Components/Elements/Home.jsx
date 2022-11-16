import { getAuth ,} from 'firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';
// import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import db from '../../firebase';




// import Fetch from './Fetch';
// import firebase from '../../firebase';


function Home() {
  const [name,setName]  = useState('');
  const [contact,setContact]  = useState('');
  const [address,setAddress]  = useState('');
  const [uid,setUid] = useState('');
  const [email,setEmail]  = useState('');
  

     const navigate = useNavigate();

  //   const user = getAuth().currentUser.uid;


    const deleteUser =(id)=>{
     deleteDoc(doc(db,"users" , id))
   toast.info("Delete User")

      
    }

    const showProfile=()=>{
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  console.log(user)
      const displayName = user.name;
      setName(displayName)
      const email1 = user.email;
      setEmail(email1)
      const contact1 = user.contact;
      setContact(contact1)
      const adress = user.address;
      setAddress(adress)
      const uid = user.uid;
      setUid(uid)
}
    }
   

    useEffect(() => {
      let authToken = sessionStorage.getItem("auth");
      if (authToken) {
        navigate("/home");
      }
      if (!authToken) {
        navigate("/login");
      }
    }, [navigate]);
  
    const logout = () => {
      sessionStorage.removeItem("auth");
      navigate("/login");
    };
    
    
   
   
  return (
    
    <div className="bg">
      <div className="container text-center py-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 signup">
              <div className="card " style={{ width: "500px" }}>
                <div>
                    <h2>Welcome To Home</h2>
                </div>
                <br />
                <div>
                <button type="button" className="btn btn-primary" onClick={logout}>
                    LogOut
                  </button> &nbsp; &nbsp;
                  <button type="button" className="btn btn-primary" 
                  onClick={()=>deleteUser({uid})}
                  >
                    Delete 
                  </button>
                  &nbsp; &nbsp;
                </div>
                <br />
                  <button type="button" className="btn btn-primary" 
                  onClick={()=>showProfile()}
                  >
                    Show Profile 
                  </button>
              </div>
             
          </div>
          <h1>{name}</h1>
          <h1>{contact}</h1>
          <h1>{address}</h1>
          <h1>{uid}</h1>

          <h1>{email}</h1>
              {/* <h1>password : {password}</h1> */}
        </div>
       
      </div>
    </div>
  )
}

export default Home