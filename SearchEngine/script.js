var request;
if(window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = ActiveXObject("Microsoft.XMLHTTP");
}
var	method = 'GET',
		url = 'data.txt';

request.open(method, url);

function pressButton() {
	if(request.status == 200 && request.readyState == 4){
		var el = document.getElementbyId('update');
		el.innerHTML = request.responseText;
 	}
}
request.send();
