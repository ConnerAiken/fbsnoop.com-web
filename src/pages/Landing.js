import React from 'react';   

import './Landing.scss';   
import { Container, Col, Row } from 'react-bootstrap';    
 
import _ from "lodash"; 
   
class Landing extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {}; 
	}  
	  
	render() { 
		return (   	 
			<Container id="page-wrapper" className="page-landing" fluid={true} style={{position: 'relative'}}>     
				<Row style={{
					backgroundColor: 'rgba(18, 23, 32, 0.75)', 
					zIndex:1,
					maxHeight: '60vh',
					overflow: 'hidden',
					maxWidth: '100vw'
				}}>    
					<Col style={{
						marginLeft: '-2%',
						marginRight: '-2%',
						minWidth: '104%'
					}}> 
						<p>Emma is the most special</p>
					</Col> 
				</Row>    
			</Container>   
		);
	}
}

export default Landing;
