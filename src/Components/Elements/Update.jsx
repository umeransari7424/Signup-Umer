import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {db} from '../../firebase';

function Update() {
    const {id} = useParams();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const updateUser = (e) => {
    e.preventDefault();
    const docRef = doc(db, "users", id);
    const data = {
      name,
      contact,
      address
    };
    setDoc(docRef , data ,{ merge: true } ).then(() =>{
      toast('Data Updated SuccessFully')
    },setName(''),setContact('') , setAddress('')) 
    
  }


  const logout = () => {
    sessionStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <div>
        <div className="bg">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-2"></div>
          <div className="col-md-8 signup">
            {/* <form className="form-group" > */}
              <div className="card " style={{ width: "500px" }}>
                <div>
                  <h2>
                    Update Form
                  </h2>
                </div><br />
              <div>
                <label htmlFor="name" className="form-label">
                  Name :
                </label>
                <input type="name" 
                className="form-control" 
                required 
                placeholder="Enter Your Name"
                onChange={(e)=>setName(e.target.value)}
                />
              </div>
               
                <br />
                <div>
                <label htmlFor="contact" className="form-label">
                  contact :
                </label>
                <input type="integer" 
                className="form-control" 
                required 
                placeholder="Enter Your Name"
                onChange={(e)=>setContact(e.target.value)}
                />
              </div>
              <br />
              <div>
                <label htmlFor="name" className="form-label">
                  Address :
                </label>
                <input type="address" 
                className="form-control" 
                required 
                placeholder="Enter Your Name"
                onChange={(e)=>setAddress(e.target.value)}
                />
              </div>
                <br />
                <div>
                  <button type="Submit" className="btn btn-primary" 
                  onClick={updateUser}
                  >
                    Save
                  </button> &nbsp; &nbsp;
                  <button type="Submit" className="btn btn-primary" 
                  onClick={logout}
                  >
                    Logout
                  </button>
                </div>
                <br />
                
              </div>{" "}
            {/* </form> */}
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    </div>
  )
}

export default Update