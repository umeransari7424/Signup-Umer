import React from 'react'

function Resetpassword({title,setEmail,resetAction}) {
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
                   {title}
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
                
                <button type="button" className="btn btn-primary" onClick={resetAction}>
                  Reset Password
                </button>
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

export default Resetpassword