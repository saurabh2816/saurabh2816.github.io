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
		var item = doc.getElementsByTagName('item');
 		for(var i=0; i<item.length; i++) {
		console.log(item[i].getElementsByTagName('title')[0].innerHTML);
 		}
	}
}
request.send();
