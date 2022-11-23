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

  // $(".title").click(function () {
  //   $(this).addClass("active");
  //   // $(this).parent().siblings().children().removeClass("active");
  //   $(this).parent().siblings().children(".desc").slideUp();
  //   $(this).next().stop().slideDown();
  // });

  // $(".content").slideUp(400);
  // $(".set header.active .content").slideDown(400);
  $(".set header").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").addClass("active");
      $(this).siblings(".content").slideUp(400);
      $(".set i")
        .removeClass("ph-caret-up-bold")
        .addClass("ph-caret-down-bold");
    } else {
      $(".set i")
        .removeClass("ph-caret-up-bold")
        .addClass("ph-caret-down-bold");
      $(this)
        .find("i")
        .removeClass("ph-caret-down-bold")
        .addClass("ph-caret-up-bold");
      $(".set header").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(400);
      $(this).siblings(".content").slideDown(400);
    }
  });
});

// $(".fa-chevron-down").toggleClass("active");
