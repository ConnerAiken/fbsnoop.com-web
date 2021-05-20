import React from 'react'; 
import './Process.scss';    

import { 
	Container,
	Col, 
	Row,  
	Form,
	Button
} from 'react-bootstrap';  
 

export class Process extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {}; 
	} 

	render() {
		return (  
			<Container style={{padding: '0'}} fluid={true}>   
				<Row noGutters={true} style={{padding: '5%', backgroundColor: '#343a40'}}>   
					<Col xs={8}> 
						<br/><br/><br/><br/><br/>   
					</Col>
					<Col xs={4}>  
					</Col> 
				</Row>    
				<Row style={{backgroundColor: '#fff'}}>   
					<Col xs={4}></Col>
					<Col xs={4} style={{paddingTop: '5%'}}>    
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>

							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
							
							<Button variant="primary" type="submit">
							Submit
							</Button>
						</Form>
					</Col> 
				</Row>    
					<Col xs={4}></Col>
			</Container>
		);
	}
} 

export default Process;
