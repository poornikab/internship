// SignUp.jsx
import React from 'react';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  return (
    <div className="signup-container width-300px ">
      <div className="container ">
        <div className="row ">
          <div className="col-md-12">
            <div className="signup-form">
              <h2 class="text-center">Sign Up</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;