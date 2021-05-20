import React from 'react';   

import './Landing.scss';   
import { 
	Container,
	Col, 
	Row,  
	Carousel,
	Button
} from 'react-bootstrap';   
import desktopMenu from "./../assets/img/desktopMenu.png";
import arduino from "./../assets/img/arduino.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCode, faFlagUsa, faPhone } from '@fortawesome/free-solid-svg-icons'

import $ from "jquery"; 
import _ from "lodash"; 
   
class LandingNew extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {}; 
	}  
	 
	componentDidMount() {
		this.stageLighting();
	}

	stageLighting(version = false) {
		const lightingPercentage = 10;
		let timestamp;
		let colors = [
			'#A2CC6E',
			'#678AA1', 
			'#689c28',
			'#3a5e75',
			'#8EFC08',
			'#6004D1'
		];

		const interval = window.setInterval(() => {  
			timestamp = Date.now(); 
			for(let i = 0; i < 100; i++) { 
				let index = Math.floor(Math.random()*($('.hex-grid__item')).length);
				let colorIndex = Math.floor(Math.random()*colors.length); 
				window.setTimeout(() => {
					$('.hex-grid__content:eq('+index+')').css('background-color', colors[colorIndex]); 
				}, index * 50);
			} 
		}, 2500); 
	}	

	generateHexagons() {
		const hexagons = [];

		for(var i = 0; i < 500; i++) {
			hexagons.push(<li key={i} className="hex-grid__item"><div className="hex-grid__content"></div></li>);
		}

		return ( 
			<ul className="hex-grid__list">
				{hexagons}
			</ul> 
		)
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
						{this.generateHexagons()} 
					</Col> 
				</Row>   
				<Row style={{
					 position: 'absolute',
					 top: 0,
					 left: 0,
					 zIndex:2,
					 bottom:0,
					 right:0,
					 minHeight: '60vh', 
					 maxHeight: '60vh',
					 maxWidth: '100vw'
				}}> 
					<Col xs={{span: 4, offset: 1}} style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'flex-start'
					}}>
						<div style={{backgroundColor: '#343a40', padding: '5%', borderRadius: '5px'}}>
							<h3 style={{color: '#FFF'}}><b><FontAwesomeIcon size="sm" icon={faCode}/>&nbsp;&nbsp;Custom Software Solutions&nbsp;&nbsp;<FontAwesomeIcon size="sm" icon={faCode}/></b></h3>
							<p style={{color: '#FFF'}}>It doesn't matter if it's a website, desktop/phone/tablet application or a custom hardware solution, we can do it all.</p>
							<Button>See our work&nbsp;&nbsp;<FontAwesomeIcon size="sm" icon={faChevronRight}/></Button>
						</div> 
					</Col>  
					<Col xs={{span: 4, offset: 1}} style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'flex-start',
					}}>
						<div style={{backgroundColor: '#343a40', padding: '2.5%', borderRadius: '5px'}}>
							<Carousel interval={2500} controls={false}>
								<Carousel.Item>
									<img
									className="d-block w-100"
									src={desktopMenu}
									/> 
								</Carousel.Item>
								<Carousel.Item>
									<img
									className="d-block w-100"
									src={arduino}
									/>  
								</Carousel.Item> 
							</Carousel>
						</div> 
					</Col>  
				</Row>
				<Row style={{borderTop: '1px solid rgba(255, 255, 255, 0.467)', backgroundColor: '#343a40', minHeight: '30vh'}}>    
					<Col style={{
						padding: '1%',
						display: 'flex',
						alignContent: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center'
					}}>
						<h2 style={{color: '#FFF'}}>Why choose us for your next IT project?</h2>
						<ul style={{color: '#FFF'}}>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ante, dictum et hendrerit nec, viverra semper est. Maecenas quis nunc sodales, placerat est vel, aliquam eros.</li>
							<li>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sed porttitor nunc, eu eleifend felis. Phasellus sit amet mauris tincidunt nulla efficitur porta quis quis ligula.</li>
							<li>Aliquam auctor ut lacus sed sagittis. Fusce laoreet fringilla nulla, at vestibulum libero semper ut. Proin libero nisl, commodo accumsan ligula et, fringilla tempus nibh. Phasellus non imperdiet metus, vel tincidunt augue.</li> 
						</ul> 
					</Col> 
				</Row>   
			</Container>   
		);
	}
}

export default LandingNew;
