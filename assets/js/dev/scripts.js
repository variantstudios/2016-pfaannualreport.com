$(document).ready(function () {
  // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }

jQuery.fn.fadeDelay = function() {
 delay = 0;
 return this.each(function() {
  $(this).delay(delay).fadeIn(550);
  delay += 50;
 });
}
$("#staff path").fadeDelay();
$("#staff path").each(function(index) {
    //$(this).delay(400*index).fadeIn(3);
    //$(this).fadeDelay();
});


  $(function () {
    var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
      $fluidEl = $("figure");
    $allVideos.each(function () {
      $(this)
        // jQuery .data does not work on object/embed elements
        .attr('data-aspectRatio', this.height / this.width)
        .removeAttr('height')
        .removeAttr('width');
    });

    $(window).resize(function () {
      var newWidth = $fluidEl.width();
      $allVideos.each(function () {
        var $el = $(this);
        $el
          .width(newWidth)
          .height(newWidth * $el.attr('data-aspectRatio'));

      });
    }).resize();
  });


  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 120
          }, 1000);
          return false;
        }
      }
    });
  });




});
