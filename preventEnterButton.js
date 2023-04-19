// Put this in Avada Code Block:
// <script type='text/javascript' src="https://simeongr.github.io/preventEnterButton.js"></script>

// prevent submitting the form by hitting Enter
jQuery(document).on("keydown", "form", function (event) {
  return event.key != "Enter";
});
