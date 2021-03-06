//jquery takes care of backwards compatibility in browsers
$('#search').keyup(function() {

  var searchField = $('#search').val();
  console.log(searchField);
  var myExp = new RegExp(searchField, "i"); // case insensitive search

  $.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed', function(data) {
    var output = "<ul class='seachresults'>";
    var items = data.items;

    for(var i=0; i<items.length; i++){
      if((items[i].title.search(myExp) != -1) || (items[i].description.search(myExp) != -1 ))  {

      output += '<br><li>';
      output += '<a href="' + items[i].link + '">' + '<h2>' + items[i].title + '</h2>' + '</a>';

      if(items[i].thumbnail != "")
      output += '<br><img src="' + items[i].thumbnail + ' height="100" width="100"/>';

      output +=  items[i].description.replace(/<(?:.|\n)*?>/gm, '') + '<br> <br>';
      output += '</li>';

    }
  }
    $('#update').html(output);
    //console.log(data.items[0].title);
  });
});
