const formBuilder = document.forms['formBuilder'],
	  output = document.getElementById('output');

formBuilder.addEventListener('submit', function(e){
	
	//don't actually submit the form
	e.preventDefault();
	e.stopPropagation();
	
	if(!this.input.value) return; //don't bother executing any more code unless we have this
	
	//attempt to parse input as JSON, and end code execution if it fails
	try{
		let inputArray = JSON.parse(this.input.value),
			validFields = [];

		// Converts object for comparison
		function objectConverter(a) {
			var o = {};
			for(var i=0;i<a.length;i++) {
				o[a[i]]='';
			}
			return o;
		}

		// Looping through inputArray to compare input type with valid types
		inputArray.forEach(element => {

			// If statement that uses object converter function to compare input type with valid types
			if( element.type in objectConverter(['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week']) ) {
				
				// If input is a valid type it is pushed to validFields array
				validFields.push(element);

			} else {

				// If tpye is not valid it will alert user and end
				alert('Sorry Invalid Input Type: ' + element.type);
				return;
			}
		});
	}
	catch(e){
		alert("Invalid JSON array. Please use format [{\"type\":\"text\"},{\"type\":\"password\"}]...");
		
		return;
	}
	
	// Passing validFields array to see if it exists for safety
	if(!validFields) return; //for safety
	
	output.value = '';
	
	// Looping through validFields array and output the inputs
	for(let x = 0; x < validFields.length; x++){
		output.value += '<input type="'+validFields[x].type+'" />\n';
	}
});