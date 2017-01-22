//jquery takes care of backwards compatibility in browsers
$.getJSON('data.json', function(data) {
  var output = "<ul class='seachresults'>";
  $.each(data, function(key, item) {
    output += '<li>';
    output += '<h2>' + val.name + '</h2>';
    output += '</li>';
  )};
  output += '</ul>';
  $('#update').html(output);
});
