//jquery takes care of backwards compatibility in browsers
$.getJSON('techcrunch.json', function(data) {
  // var output = "<ul class='seachresults'>";
  // $.each(data, function(key, val) {
  //   output += '<li>';
  //   output += '<h2>' + val.name + '</h2>';
  //   output += '</li>';
  // });
  // output += '</ul>';
  //$('#update').html(data);
  console.log(data.items[0].title);
});
