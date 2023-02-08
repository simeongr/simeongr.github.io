let inputFilter = () => {
    let filterElementValue = document.getElementById("filter").value.toLowerCase();
  
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].toLowerCase().includes(filterElementValue) || classItems[i].toLowerCase().includes(filterElementValue)) {
        document.getElementById(ids[i]).removeAttribute("hidden");
      } else {
        if (!document.getElementById(idsOld[i]).checked) {
          document.getElementById(ids[i]).setAttribute("hidden", "hidden");
        }
      }
    }
  
    if (!filterElementValue) {
      for (var i = 0; i < classes.length; i++) {
        document.getElementById(ids[i]).removeAttribute("hidden");
      }
    }
  };
  
  let input = document.getElementById("filter");
  input.addEventListener("input", inputFilter);
  
  function showMore(button, dotsID, moreID) {
    var dots = document.getElementById(dotsID);
    var moreText = document.getElementById(moreID);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      button.innerText = "Покажи още";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      button.innerText = "Покажи по-малко";
      moreText.style.display = "inline";
    }
  }
  