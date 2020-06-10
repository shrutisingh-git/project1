import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SampleCSS from '../../assets/css/sample.css';




class signup extends Component {
    render() {
        // const onclickSinupHandler = (e) => this.props.history.push('/Register');
        return (
            <div className="col-md-12 container-login ">
                <div className="login-form-container">
					<form className="login-form"id="form">
						<h2 className="text-title text-center font-weight-bold">Sign Up</h2>	
						<div className="input-form">
						<label  className="text-form"> Username
							<input type="text" placeholder="Type your username" data-validate="username is required" required/>
							<span ><i class="fas fa-user-circle"></i></span>
						</label>
						</div>	
                        <div className="input-form">
						<label  className="text-form"> Email
							<input type="email" placeholder="Type your email" data-validate="email is required" required/>
							<span ><i class="fas fa-envelope"></i></span>
						</label>
						</div>				
						<div className="input-form">
							<label className="text-form">Password	
								<input type="password"placeholder="Type your password "data-validate="password is required" required/>
								<span className="input-logo" ><i class="fas fa-unlock-alt"></i></span>
							</label>
						</div>	
                        <div className="input-form">
						<label  className="text-form"> Mobile
							<input type="mobile" placeholder="Type your mobile number"data-validate="mobile number is required"required/>
							<span ><i class="fas fa-mobile-alt"></i></span>
						</label>
						</div>				
							<button className="btn-form btn btn-block text-center">SIGN UP</button>															
						<div className="Footer-login-form">
								<h5 className="text-footer text-center">Or Sign Up Using</h5>	
						    <div className="logo">
							    <a href="https://facebook.com" target="_blank" className="logo-a" id="logo-fb"><i className="fab fa-facebook"> </i></a>
								<span><a href="https://gmail.com" target="_blank" className="logo-a"id="logo-gm"><i className="fab fa-google-plus"></i></a></span>
								<main><a href="https://twitter/com" target="_blank" className="logo-a"><i className="fab fa-twitter"></i> </a></main>
						    </div>
							<div className="Footer-text">
								<div className="text1">OR LOG IN HERE BY USING YOUR EXISTING ID?</div>
								<Link to="/login" className="text2 ">LOG IN</Link>			      	
							</div>					    															   							
						</div>
					</form>	
				</div>				
			</div>
        );
    }
}

export default signup;