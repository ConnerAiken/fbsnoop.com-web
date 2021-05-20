import React from 'react'; 
import './Portfolio.scss';    

import { 
	Container,
	Col, 
	Row,  
} from 'react-bootstrap'; 
 

export class Portfolio extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {};  
	}
 
	
	render() {
		return (  
			<Container style={{padding: '0'}} fluid={true}>    
				<Row noGutters={true} style={{height: '50vh', backgroundColor: '#343a40'}}>   
					<Col xs={8}>    
						<ul>
							<li>Brain Explorer</li>
							<li>UFC Fit</li>
							<li>CVMSD</li>
							<li>BT Menu</li>
							<li>BT Command Center</li>
							<li>Green Stream Wireless</li>
							<li>SureShot Pub</li>
							<li>Digital Advertisements Catepiller</li>
							<li>Baal Bot for Diablo 2</li>
							<li>CDA</li>
							<li>Alert Workstation</li>
							<li>Data Warehouse</li>
							<li>MeetingManager</li>
							<li>TaskList</li>
							<li>T-Mobile REMO</li> 
						</ul>
					</Col>
					<Col xs={4}>  
					</Col> 
				</Row>    
			</Container>
		);
	}
}

export default Portfolio;
