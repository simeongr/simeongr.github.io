window.onload = function () {
  for (var i = 0; i < 45; i++) {
    document
      .getElementById(checkboxIDs[i])
      .addEventListener("change", function () {
        if (this.checked) {
          document.getElementById(`classItem-0`).removeAttribute("hidden");
        } else {
          document
            .getElementById(`classItem-0`)
            .setAttribute("hidden", "hidden");
        }
      });
  }
};
