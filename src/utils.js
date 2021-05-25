export default {    
	sendExtractToServer(file) { 
		// This will upload the file after having read it 
			fetch('/api/process', { // Your POST endpoint
			method: 'POST',
			headers: {
				// Content-Type may need to be completely **omitted**
				// or you may need something
				"Content-Type": "application/zip"
			},
			body: file // This is your file object
			}).then(
				response => response.json() // if the response is a JSON object
			).then(
				success => console.log(success) // Handle the success response object
			).catch(
				error => console.log(error) // Handle the error response object
			); 
  
	},
	createNestedObject(base, names, value) { 
		// If a value is given, remove the last name and keep it for later:
		var lastName = arguments.length === 3 ? names.pop() : false;
	
		// Walk the hierarchy, creating new objects where needed.
		// If the lastName was removed, then the last object is not set yet:
		for( var i = 0; i < names.length; i++ ) {
			base = base[ names[i] ] = base[ names[i] ] || {};
		}
	
		// If a value was given, set it to the last name:
		if( lastName ) base = base[ lastName ] = value;
	
		// Return the last object in the hierarchy:
		return base; 
	} 
}