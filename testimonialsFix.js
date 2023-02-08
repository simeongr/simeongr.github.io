//This is a wrapper to make jQuery work nicely with WordPress.
jQuery(document).ready(function ($) {
  //Establish the function
  function fixedTestimonialHeight() {
    //Setup variable
    var heighestReview = -1;

    //Find the height of the highest .review
    $("#wrapper .fusion-testimonials .review").each(function (index) {
      heighestReview =
        heighestReview > $(this).height() ? heighestReview : $(this).height();
    });

    //Override height of .reviews
    $("#wrapper .fusion-testimonials .reviews").each(function () {
      $(this).height(heighestReview);
      $(this).css("max-height", heighestReview);
      $(this).css("min-height", heighestReview);
    });
  }

  //Run on load
  fixedTestimonialHeight();

  $(window).resize(function () {
    //Run on resize
    fixedTestimonialHeight();
  });
});
