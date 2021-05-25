import React from 'react';    
import './Landing.scss';     
import _ from "lodash"; 
import { FileDrop } from 'react-file-drop';
import ReactGA from 'react-ga';   
import { Container, Row, Col, Button } from 'react-bootstrap';
import utils from '../utils';
var unzip = require('unzip-js');
   
class Landing extends React.Component {
	constructor(props) {
	  super(props); 
	  this.state = {
		dataBucket: {

		}
	  };  
	  this.fileInputRef = React.createRef()
	}  

	handleInputChange(event) {  
		unzip(event.target, function (err, zipFile) {
		  if (err) {
			return console.error(err)
		  }
		  
		  console.log('Successfully unzipped file from browse button', zipFile);
		  return; 
		})
	}

	createLocalStorageBucketsForCategories(entries) {
		// 1. Get the current data bucket w/o references
		const newBucket = _.cloneDeep(this.state.dataBucket);
		
		// 2. Loop each entry type and create a category
		entries.forEach(entry => {
			// 3. If we are on a directory, skip
			if(entry.name.includes('.')) {
				console.log(entry.split('.')[1]);
				//newBucket[entry] = [];
			}
		});
		this.setState({dataBucket: newBucket});
	}

	onDrop(event) {  
		if(!event[0]) {
			console.log("No event target")
		}
		
		// Grab all the entires
		unzip(event[0], (err, zipFile) => {
			if (err) {
				return console.error(err)
			}
			
			// Loop
			zipFile.readEntries((err, entries) => {
				if (err) {
					return console.error(err)
				}
				
				// Create the object to store all the data
				let dataCatagories = {};
				
				// Bucket the entries
				entries.forEach(entry => {
					// 3. If we are on a directory, skip
					if(entry.name.includes('.')) {
						const filePaths = entry.name.split('.');
						
						// Remove the filename
						const filePath = filePaths[0];
						const extractName = filePaths[filePaths.length - 1];
						const extension = filePaths.pop();
						  
						// Parse the filename's path into an object and merge with existing
						utils.createNestedObject(dataCatagories, filePath.split('/'), {});  
						  
						// Assign the filename to the object  
						_.set(dataCatagories, filePath.replace('/', '.') + '.data', false);  
					}
				});
				
				// Emit the data structure
				console.log(dataCatagories);
			})
		});


		utils.sendExtractToServer()
	}

	onDragOver(event) { 
		document.querySelector('.file-drop').style.background = 'green';
		document.querySelector('.file-drop').style.boxShadow = '1px 1px 8px 2px rgba(0,0,0,0.75)';
	}

	onDragLeave(event) { 
		document.querySelector('.file-drop').style.boxShadow = 'none';
		document.querySelector('.file-drop').style.background = 'grey';
	}

	onTargetClick(event) {
		this.fileInputRef.click()
	} 
	render() {   
		ReactGA.initialize('G-LKZCQY3SQE'); 
		ReactGA.pageview(window.location.pathname + window.location.search);

		return ( 
			<Container>
				<Row>
					<Col> 
						<h1>Facebook Data Explorer</h1> 
						<hr/>
					</Col>
				</Row>
				<Row>
					<Col>   
						<p>Drag and drop your data extract onto the box below</p>
						<FileDrop 
							onDragLeave={this.onDragLeave} 
							onDragOver={this.onDragOver} 
							onDrop={this.onDrop} 
							onTargetClick={this.onTargetClick} 
							onFrameDragEnter={this.onFrameDragEnter}
							onFrameDragLeave={this.onFrameDragLeave}
							onFrameDrop={this.onFrameDrop}
							className="file-drop"
							targetClassName="file-drop-target"
							draggingOverFrameClassName="file-drop-target-frame"
							draggingOverTargetClassName="file-drop-target-frame"
						></FileDrop>
						<hr/>
						<p><small>*Only files stored with no compression or compressed with deflate algorithm are supported</small></p>
					</Col>
				</Row>
			</Container>   
		);
	}
}

export default Landing;