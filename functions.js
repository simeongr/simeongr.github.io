let inputFilter = () => {
  let filterElementValue = document
    .getElementById("filter")
    .value.toLowerCase();

  for (var i = 0; i < classDefinitions.length; i++) {
    if (
      classDefinitions[i].toLowerCase().includes(filterElementValue) ||
      classItems[i].toLowerCase().includes(filterElementValue)
    ) {
      document.getElementById(checkboxIDs[i]).removeAttribute("hidden");
    } else {
      if (!document.getElementById(checkboxInputIDs[i]).checked) {
        document
          .getElementById(checkboxIDs[i])
          .setAttribute("hidden", "hidden");
      }
    }
  }

  if (!filterElementValue) {
    for (var i = 0; i < classDefinitions.length; i++) {
      document.getElementById(checkboxIDs[i]).removeAttribute("hidden");
    }
  }
};

let input = document.getElementById("filter");
input.addEventListener("input", inputFilter);

for (var i = 0; i < 45; i++) {
  document
    .getElementById(checkboxIDs[i])
    .addEventListener("change", function () {
      if (this.checked) {
        document.getElementById(`classItem-0`).removeAttribute("hidden");
      } else {
        document.getElementById(`classItem-0`).setAttribute("hidden", "hidden");
      }
    });
}

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
