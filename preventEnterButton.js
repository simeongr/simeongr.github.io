// prevent submitting the form by hitting Enter
jQuery(document).on("keydown", "form", function (event) {
  return event.key != "Enter";
});
