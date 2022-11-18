import React from 'react'
import {Link } from 'react-router-dom'
function Login({title,setEmail,setPassword,handleAction,forgetPassword}) {
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
                   {title} Form
                  </h2>
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
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Enter Your Email"
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
              <div>
                <button type="button" className="btn btn-primary" onClick={handleAction}>
                  Login
                </button> &nbsp; &nbsp;
                <button type="button" className="btn btn-primary" onClick={forgetPassword}>
                  Forget Password
                </button>
              </div>
              <br />
              <span>If You don't have an Account &nbsp;
                <Link to="/">SignUp</Link>
              </span>
              <Link to='/userdata'>
              <button type="button" className="btn btn-primary"  >
                  Show Details 
                  </button>
              </Link>
            </div>{" "}
          </form>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  </div>
  )
}

export default Login