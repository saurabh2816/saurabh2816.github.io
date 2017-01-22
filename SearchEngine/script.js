//jquery takes care of backwards compatibility in browsers
$.getJSON('techcrunch.json', function(data) {
  var output = "<ul class='seachresults'>";
  // $.each(data, function(key, val) {
  //   output += '<li>';
  //   output += '<h2>' + val.items + '</h2>';
  //   output += '</li>';
  // });
  // output += '</ul>';
  var items = data.items;
  for(var i=0; i<items.length; i++){
    output += '<li>';
    output += '<a href="' + items[i].link + '">' + items[i].title + '</a>';
    output += '<br><img src="' + items[i].thumbnail + ' height="100" width="100"/>'
    output +=  items[i].description.replace(/<(?:.|\n)*?>/gm, '') + '<br> <br>';
    output += '</li>';
  }
  $('#update').html(output);
  //console.log(data.items[0].title);
});
