$(document).ready(function () {
  // loader start
  $(".loader").fadeTo(1500, 1).fadeOut(300);
  // loader end

  // count up started
  $(".count").each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate(
      { Counter: $this.attr("data-stop") },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $this.text(Math.ceil(now));
        },
      }
    );
  });
  // count up ended
});
