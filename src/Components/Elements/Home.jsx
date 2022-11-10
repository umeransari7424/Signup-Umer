import React from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
      let authToken = sessionStorage.getItem("auth");
      if (authToken) {
        navigate("/home");
      }
      if (!authToken) {
        navigate("/login");
      }
    }, []);
  
    const logout = () => {
      sessionStorage.removeItem("auth");
      navigate("/login");
    };
  return (
    
    <div className="bg">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 signup">
              <div className="card " style={{ width: "500px" }}>
                <div>
                    <h2>Welcome To Home</h2>
                </div>
                <div>
                <button type="button" class="btn btn-primary" onClick={logout}>
                    logout
                  </button>
                </div>
              </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  )
}

export default Home