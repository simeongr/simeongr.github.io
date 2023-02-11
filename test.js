for (var i = 0; i < 45; i++) {
    const t = document.getElementById(checkboxIDs[i])
    t.addEventListener("change", function(){
      if (this.checked) {
        document
            .getElementById("classItem-0")
            .removeAttribute("hidden");
      } else {
        document
            .getElementById(`classItem-0`)
            .setAttribute("hidden", "hidden");
      }
    })
  }