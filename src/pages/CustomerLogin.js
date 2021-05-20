import React from 'react'; 
import './CustomerLogin.scss';   

import { 
	Container,
	Col, 
	Row,  
} from 'react-bootstrap';
 

export class CustomerLogin extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {}; 
	} 
	
	render() {
		return (  
			<Container style={{padding: '0'}} fluid={true}>   
				<Row noGutters={true} style={{height: '50vh', backgroundColor: '#343a40'}}>   
					<Col xs={8}>    
					</Col>
					<Col xs={4}>  
					</Col> 
				</Row>    
			</Container>
		);
	}
}

export default CustomerLogin;
