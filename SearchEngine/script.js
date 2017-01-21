var request = new XMLHttpRequest();

//xhrReq.open(method, url, async);
request.open("GET", "data.txt", false);
request.send();

//if(request.status == 200)
console.log(request.status);
