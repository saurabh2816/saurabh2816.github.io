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
		console.log(request.responseXML.getElementsByTagName('channel').getElementsByTagName('title')[1]);
 	}
}
request.send();
