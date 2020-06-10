import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Forgotpassword extends  Component{
    constructor(props){
        super(props)
        this.state = {
            isEmailValid:false,
            email:''
        }
    }
    handleEmailChange = (props) => {
        this.setState({
            email :  props.target.value
        })
    }
    validateEmail = (props) => {
        var email = this.state.email
        
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) )
        {
          this.setState({
            isEmailValid : true
          })
        } else {
            alert("Invalid email id -"+email)
            this.setState({
                isEmailValid : false
              })
        }     
    }
    render(){
        return(
            <div className="col-md-12 container-login ">
                <div className="login-form-container">
                    <form className="login-form" id="form">
                        <h2 className="text-title text-center font-weight-bold">Forgot Password</h2>
                        <div className="input-form">
                            <label  className="text-form"> Email
                                <input id="forgotPassEmail" onChange={ (e) => this.handleEmailChange(e)} type="email" placeholder="Type your registered email address " data-validate="email address required" required/>  
                                <span ><i class="fas fa-envelope"></i></span>
                            </label>
                            <button onClick={this.validateEmail}value="submit" className="btn-form btn btn-block text-center mt-5" >Submit</button>                            															
                            <div className="back">
                                <Link to="/login" className="back-to-login ">Back to Log In page</Link>			      	
                            </div>	                                                                                                       				    															   							
						</div>                                                                
                    </form>
                </div>
            </div>
        )                
    }
} 
export default Forgotpassword;