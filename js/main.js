// Name input//
$('#nameInput-btn').click(function(event) {
  event.preventDefault();
  var usernameOutput = $('.nameInput').val();
  $('.nameInput').html(usernameOutput);
  //Fade in the next hidden div after clicking 'enter'
    $('#homepageIntro').fadeOut();
    $('.welcomeIntro-hidden').fadeIn();
});

//forwardArrow button
$('#forwardArrow').click(function(event) {
  event.preventDefault();
  $('.welcomeIntro-hidden').fadeOut();
  $('.searchSwapi-hidden').fadeIn();

})

//Search SWAPI Database//
$('.search-btn').click(function(event) {
  event.preventDefault();
  var input = $('.search-input').val();
  //Fade in div after clicking black arrow.
  $.getJSON('http://swapi.co/api/people', {
    search: input
  },function(data) {
    $('.name').html(data.results[0].name);
    $('.birthDate').html(data.results[0].birth_year);
    $('.gender').html(data.results[0].gender);
    console.log(data);
  });
  });
