// This fixes the issue with testimonials moving the whole page up and down.
// This is a wrapper to make jQuery work nicely with WordPress.
jQuery(document).ready(function ($) {
  // Establish the function
  function fixedTestimonialHeight() {
    // Setup variable
    var highestReview = -1;

    // Find the height of the highest .review
    $("#wrapper .fusion-testimonials .review").each(function (index) {
        highestReview =
        highestReview > $(this).height() ? highestReview : $(this).height();
    });

    // Override height of .reviews
    $("#wrapper .fusion-testimonials .reviews").each(function () {
      $(this).height(highestReview);
      $(this).css("max-height", highestReview);
      $(this).css("min-height", highestReview);
    });
  }

  // Run on load
  fixedTestimonialHeight();

  $(window).resize(function () {
    // Run on resize
    fixedTestimonialHeight();
  });
});
