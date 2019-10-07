$(document).ready(function () {

  $(".tabholder").show();
  $(".tab").hide();
  $(".tab:first").show();

  $(".tabholder ul").children().each(function (i) {
    $(this).click(function () {
      var index = i;

      $(".tabholder ul li, a").removeClass("active");

      $(".tab-content li").hide();
      $(".tab-content li").eq(i).show();

      $(this).addClass("active");
      $(this).find("a").addClass("active");


    });
  });




}); /* close document ready jquery */