// 3rd Party Integrations
import React from 'react'; 
import { withRouter, BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Custom code
import "./App.scss"; 
import Nav from "./components/Nav";
import Landing from "./pages/Landing";   
import ReactGA from 'react-ga';
ReactGA.initialize('G-LKZCQY3SQE'); 
  
// 138.01 / 4 = 34.50
export default function App() {
	return (
		<Router>   
					<Switch>
						<Route exact path="/">  
							<Landing/>
						</Route>  
					</Switch>  
		</Router>
	);
  } 