import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from '../assets/image/login-banner.jpg';
import SampleCss from '../assets/css/sample.css';
import dashboard from '../assets/css/dashboard.css';
import {BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import LoginContainner from './containers/login';
import SignupContainer from './containers/signup';
import Forgotpassword from './containers/forgotpassword';
import DashboardContainer from './containers/dashboard';
class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={LoginContainner}  />
					<Route exact path="/login" component={LoginContainner}  />
					<Route exact path="/Register" component={SignupContainer}  />
					<Route exact path="/Forgotpassword" component={Forgotpassword}  />
					<Route exact path="/dashboard" component={DashboardContainer} />
				</Switch>
			</Router>		
		);		
	}		
	
}
export default App;			