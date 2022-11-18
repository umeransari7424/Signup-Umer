// import { FirebaseError } from "firebase/app";
import React from "react";
import { Link } from "react-router-dom";
// import firebase from "../../firebase"
// import {FaCamera} from "react-icons/fa"

function Signup({title,setName ,setContact,setAddress,handleFileChange, setEmail, setPassword  ,handleAction}) {
  
  return (
    <div className="bg">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-2"></div>
          <div className="col-md-8 signup">
            {/* <form className="form-group" > */}
              <div className="card " style={{ width: "500px" }}>
                <div>
                  <h2>
                    {title} Form
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
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email :
                  </label>

                  <input
                    className="form-control"
                    type="email"
                    required
                    placeholder="Enter Your Email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Password :
                  </label>

                  <input
                    className="form-control"
                    type="password"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                  />
                </div>
                <br />
                <input class="form-control" type="file" onChange={handleFileChange} id="formFile"></input>
                <br />
                <div>
                  <button type="Submit" className="btn btn-primary" 
                  onClick={handleAction}
                  >
                    {title}
                  </button>
                </div>
                <br />
                
                <span> Do you have an account?&nbsp;
                  <Link to="/login">Login</Link>
                </span>
                <br />
                
              </div>{" "}
            {/* </form> */}
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    // </div>
  );
}

export default Signup;
