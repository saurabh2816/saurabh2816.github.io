console.log("hey");
	var request = new XMLHttpRequest();
	request.open('GET', 'data.txt', false);
	request.send();
			console.log(request);
		document.writeln(request.responseText);
	
