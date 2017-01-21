var request;
if(window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = ActiveXObject("Microsoft.XMLHTTP");
}
var	method = 'GET',
		url = 'techcrunch.xml';

request.open(method, url);

request.onreadystatechange = function() {
	if(request.status === 200 && request.readyState === 4){
		var doc = request.responseXML;
		console.log(doc);
		console.log(doc.getElementsByTagName('item')[0].getElementsByTagName('title'));
		//console.log(doc.getElementsByTagName('channel'));
 	}
}
request.send();
