import React from 'react';    
import './Landing.scss';     
import _ from "lodash"; 
   
class Landing extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {}; 
	}  
	  
	render() { 
		return (   	 
			<p style='text-align: center;margin: 5%;'>Emma is the <u>most special</u> lady that i've ever met</p>  
		);
	}
}

export default Landing;
