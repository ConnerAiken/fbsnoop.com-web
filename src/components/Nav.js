import { LinkContainer } from 'react-router-bootstrap'; 
import React from 'react';  
import ReactGA from 'react-ga';  
import $ from "jquery";
import _ from "lodash";

import {
	Nav,
	Navbar 
} from 'react-bootstrap';
import Logo from "./../assets/img/logo-light.png";   
import './Nav.scss'; 
 
 

export default class Navigation extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
            navVisible: true 
        };  
	}

	setupNavbarFade(checkImmedietly) {
		var _self = this; 

        function checkForFadeConditions() { 
            // Scroll info
            let scrollTop = window.scrollY;
            let docHeight = document.body.offsetHeight;
            let winHeight = window.innerHeight;
            let scrollPercent = scrollTop / (docHeight - winHeight);
            let scrollPercentRounded = Math.round(scrollPercent * 100); 
             
            // If the dark container the navbar sits in is out of site, show the navbar 
            if(scrollPercentRounded > 25) {
                _self.setState({navVisible: true})
            } 
        }
         
        if(window.location.pathname !== '/') {
            return this.setState({
                navVisible: true
            });
        }else if(checkImmedietly) {
            window.setTimeout(() => checkForFadeConditions(), 0); 
        }

		$(document).ready(function(){
			$(window).scroll(_.throttle(checkForFadeConditions, 50))
		});
	} 
    
	componentDidMount() {    
		ReactGA.initialize('G-LKZCQY3SQE'); 
		ReactGA.pageview(window.location.pathname + window.location.search);
        // Setup Navbar fade
		this.setupNavbarFade(true); 
        // Set nav link
        this.updateNav(); 
	}
    
    componentDidUpdate() {
        // Set nav link
        this.updateNav();

        $('.nav-link').on('click', () => {
            window.setTimeout(() => this.updateNav(), 0) 
        }); 
    }
	
    updateNav() { 
        // Set nav link
        $('.nav-active').removeClass('nav-active');
        
        if(window.location.pathname == '/') {
            $('#home').addClass('nav-active');
        }else { 
            $('#'+window.location.pathname.replace('/', '')).addClass('nav-active');
        }   
    }

	render() { 
		return (   
            <Navbar bg="dark" expand="md" sticky="top" fixed="top" style={{ 
                opacity: this.state.navVisible ? 1 : 0, 
                transition: 'opacity 1000ms linear'
             }}>
                <Navbar.Brand href="/"> 
                    <img
                        src={Logo}
                        style={{
                            width: 'auto',
                            maxHeight: '60px', 
                            transition: 'opacity 1000ms linear'
                        }}
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto">  
						<LinkContainer to="/">
							<Nav.Link id="home">Home</Nav.Link>
						</LinkContainer> 
						<LinkContainer to="/process">
							<Nav.Link disabled={true} id="process">Services</Nav.Link>
						</LinkContainer>  
						<LinkContainer to="/process">
							<Nav.Link disabled={true}  id="process">Process</Nav.Link>
						</LinkContainer>  
						<LinkContainer to="/pricing">
							<Nav.Link disabled={true}  id="pricing">Pricing</Nav.Link>
						</LinkContainer>  
						<LinkContainer to="/portfolio">
							<Nav.Link disabled={true}  id="portfolio">Portfolio</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/contact">
							<Nav.Link disabled={true}  id="contact">Contact</Nav.Link>
						</LinkContainer>  
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>  
		);
	}
}
 
