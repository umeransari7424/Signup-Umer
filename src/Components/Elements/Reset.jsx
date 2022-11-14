import React from 'react'
import { Link } from 'react-router-dom'

function Reset([setPassword,resetpassword]) {
  return (
    <div className="bg">
    <div className="container py-5">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 login">
          <form className="form-group">
            <div className="card " style={{ width: "500px" }}>
            <div>
                  <h2>
                   Resetpassword
                  </h2>
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
              <div>
                
                <button type="button" className="btn btn-primary" onClick={resetpassword}>
                  Reset Password
                </button>
                <br /> <br />
                <div className='text-center'>
                <Link to="/login">Login</Link>
                </div>
              </div>
              <br />
             
            </div>{" "}
          </form>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  </div>
  )
}

export default Reset;