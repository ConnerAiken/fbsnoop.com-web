// 3rd Party Integrations
import React from 'react'; 
import { withRouter, BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Custom code
import "./App.scss"; 
import Nav from "./components/Nav";
import Landing from "./pages/Landing";  
import Portfolio from "./pages/Portfolio";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import CustomerLogin from "./pages/CustomerLogin";
import ReactGA from 'react-ga';
ReactGA.initialize('G-LKZCQY3SQE'); 
  
// 138.01 / 4 = 34.50
export default function App() {
	return (
		<Router>   
					<Switch>
						<Route exact path="/"> 
							<Nav/>
							<Landing/>
						</Route>  
						<Route path="/customer-login">
							<Nav/>
							<CustomerLogin />
						</Route>
						<Route path="/process">
							<Nav/>
							<Process />
						</Route>
						<Route path="/portfolio">
							<Nav/>
							<Portfolio />
						</Route>
						<Route path="/contact">
							<Nav/>
							<Contact />
						</Route>
					</Switch>  
		</Router>
	);
  } 