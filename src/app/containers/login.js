import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class login extends Component {
   constructor(props){
	   super(props)
	   this.state=({
	   })
   }
	
	handleUserInput=(props)=>{
		console.log(props.target.value);
		
		this.setState({
			username:props.target.value
		})
	}
	handleUserPassword=(props)=>{
		console.log(props.target.value);
		
		this.setState({
			password:props.target.value
		})
	}
	validateLoginButton =(event) =>{
		event.preventDefault()
		console.log(this.state);
		alert("you have Logged In")
	}
     
	
    render() {
        // const onclickSinupHandler = (e) => this.props.history.push('/Register');
        return (
            <div className="col-md-12 container-login ">
                <div className="login-form-container">
					<form className="login-form" id="form">
						<h2 className="text-title text-center font-weight-bold">Login</h2>	
						<div className="input-form">
						<label  className="text-form"> Username
							<input type="text" onChange={ (e) => this.handleUserInput(e)} placeholder="Type your username"/>
							<span ><i className="fas fa-user-circle"></i></span>
						</label>
						</div>					
						<div className="input-form">
							<label className="text-form">Password	
								<input type="password" onChange={ (e) => this.handleUserPassword(e)} placeholder="Type your password " />
								<span className="input-logo" ><i className="fas fa-unlock-alt"></i></span>
							</label>
						</div>					
				        <Link to="/Forgotpassword" className="text-0 text-right">Forgot password?</Link>
								<button onClick={(event)=>this.validateLoginButton(event)} className="btn-form btn btn-block text-center">LOGIN</button>																											
						<div className="Footer-login-form">
								<h5 className="text-footer text-center">Or Sign Up Using</h5>	
						    <div className="logo">
                            <a href="https://facebook.com" target="_blank" className="logo-a" id="logo-fb"><i className="fab fa-facebook"> </i></a>
								<span><a href="https://gmail.com" target="_blank" className="logo-a"id="logo-gm"><i className="fab fa-google-plus"></i></a></span>
								<main><a href="https://twitter/com" target="_blank" className="logo-a"><i className="fab fa-twitter"></i> </a></main>
						    </div>
							<div className="Footer-text">
								<div className="text1">Or Sign Up Using?</div>
								<Link to="/Register" className="text2 ">SIGN UP</Link>			      	
							</div>					    															   							
						</div>
					</form>	
				</div>				
			</div>
        );
    }
}

export default login;