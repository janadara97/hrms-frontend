import React from "react";
import { useSelector } from "react-redux";

function Login() {

  const ssoItems = useSelector((state) => state.ssoItemsReducer.ssoItems);

  return (
    <div className="login">
      <div className="login-items-container">
        <div className="login-logo">
          <i className="login-logo-icon"></i>
        </div>
        <div className="login-content">
          <div className="login-content-welcome-title">
            <h4>Welcome Back</h4>
          </div>
          <div className="login-input-container">
            <form>
                <input type="email" className="login-text-input" id="email" placeholder="Enter your email" autoComplete="off"/>
                <label className="login-label" htmlFor="email">Email</label>
            </form>
          </div>
          <button className="login-content-login-button">Continue</button>
          <div className="login-content-signup-label">
            Don't have an account? Sign Up
          </div>
          <div className="login-content-line-break">
            <span>OR</span>
          </div>
          <div className="login-content-sso">
            {ssoItems.map((item)=>(
              <div className="sso-items" key={item.id}>
                <div className="sso-item-logo">
                  <i className="sso-logo"></i>
                </div>
                <div className="sso-item-name">ddddsdsdjsd</div>
              </div>
            ))}
            
          </div>
        </div>
        <div className="login-footer">Login footer</div>
      </div>
    </div>
  );
}

export default Login;