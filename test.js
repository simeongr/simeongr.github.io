for (var i = 0; i < 45; i++) {
    const t = document.getElementById(checkboxIDs[i])
    t.addEventListener("change", function(){
      if (this.checked) {
        document
            .getElementById(`classItem-${i}`)
            .removeAttribute("hidden");
      } else {
        document
            .getElementById(`classItem-${i}`)
            .setAttribute("hidden", "hidden");
      }
    })
  }