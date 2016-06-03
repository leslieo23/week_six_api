$('button').on('click',function(){
  var animal=$(this).data('animal');
  var queryURL="http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";""
  $.ajax({
    url:queryURL,
    method:'GET'
  }).done(function('data'){
    console.log(data);
  })
})