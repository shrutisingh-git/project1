import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCss from '../assets/css/custom.css';
import Image from '../assets/image/login.jpg';

class Sample extends Component {

  render() {
       return (
            <div className="login-container">
                <div className="col-md-6 login-banner-container">
                    {/* <img src={Image} alt="img" className="img-fluid login-bannner-img" /> */}
                </div>
                <div className="col-md-6 login-form-container">
                   <div className="header-form-container">
                        <div className="header">
                            <h5 className="login-page form"> Already Member </h5>
                            <h5 className="help">Need Help?</h5>
                        </div>
                        <div className="main-form-container">
                            <input type="text" className="mb-3" placeholder="Username" />
                            <input type="password" className="mb-3"  placeholder="Enter your password.." />
                            <label>
                                <input type="checkbox" value="yes" />
                                <span className="checkbox-signin mt-0">Stay sign in</span>
                            </label>
                            <input type="submit" value="sign in " name="sign-in-button" />
                        </div>
                        <div className="footer">
                            <h5>Don't have an account yet?</h5>
                            <a href="" alt="sign-up-page">create an accoount</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
 
}
export default Sample;