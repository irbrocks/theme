/*
 * Main file of IRB Rocks!
 */

$(document).ready(function(){
  // Future
  /*$('.post-link').click(function(e){
    var el = $(this);
    e.preventDefault();

    // Hide the main
    $('#content').fadeOut(150, function(){
      // Load async
      $.ajax({
        url: el.attr('href')
      }).done(function(data){
        window.history.pushState(el.text(), el.text(), el.attr('href'));
        $('#content').html($(data).find('main#content').html());
        $('#content').fadeIn(150);
      });
    });
  });*/
});
