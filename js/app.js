jQuery(document).ready(function() {

    var btn = $('.up');   
 
    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        btn.removeClass("d-none");
      } else {
        btn.addClass("d-none");
      }
    }); 
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });
    });