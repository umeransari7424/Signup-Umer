import React from 'react'

function Login() {
  return (
    <div className="bg">
    <div className="container py-5">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 signup">
          <form className="form-group">
            <div className="card " style={{ width: "500px" }}>
            <div>
                  <h2>
                   Login Form
                  </h2>
                </div>
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
                  placeholder="Enter Your Password"
                />
              </div>
              <br />

              

              

              <div>
                <button type="Submit" class="btn btn-primary">
                  Login
                </button>
              </div>
              <br />
              <span> You don't have an Account &nbsp;</span>
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