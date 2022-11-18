
// import { getAuth } from 'firebase/auth';
import React from 'react';
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  // const [user,setUser] = useState([]);

     const navigate = useNavigate();

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
                
                </div>
                <br />
               
                  <button type="button" className="btn btn-primary"  >
                  Show Details 
                  </button>
               
                
              </div>

             
          </div>
      
        </div>
        <div>
         
        </div>
       
      </div>
    </div>
  )
}

export default Home