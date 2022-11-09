import React from "react";
// import { Link } from "react-router-dom";

function Signup({title , setEmail, setPassword  ,handleAction}) {
  return (
    <div className="bg">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 signup">
            <form className="form-group" >
              <div className="card " style={{ width: "500px" }}>
                <div>
                  <h2>
                    {title} Form
                  </h2>
                </div><br />
               
                <br />
                <div>
                  <label for="exampleFormControlInput1" class="form-label">
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
                  <label for="exampleFormControlInput1" class="form-label">
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
                <div>
                  <button type="Submit" className="btn btn-primary" 
                  onClick={handleAction}
                  >
                    Register
                  </button>
                </div>
                <br />
                <span> Do you have an account?&nbsp;</span>
              </div>{" "}
            </form>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    // </div>
  );
}

export default Signup;
