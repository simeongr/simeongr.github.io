// Put this is Avada Code Block:
// <div class="fusion-text fusion-text-2">
//     <p style="text-align: center">&#8593;</p>
//     <p id="choice" style="text-align: center;"></p>
// </div>
// <script "application/javascript" src="https://simeongr.github.io/final-choice.js"></script>

let hideFinalLegend = (i) => {
  var legendID = `legend-${i}-final`;
  document.getElementById(legendID).setAttribute("hidden", "hidden");
};

let showFinalLegend = (i) => {
  var legendID = `legend-${i}-final`;
  document.getElementById(legendID).removeAttribute("hidden");
};

let hideFinalDiv = (i, j) => {
  var divID = `tmclass${i}-item-${j}-final-div`;
  document.getElementById(divID).setAttribute("hidden", "hidden");
};

let showFinalDiv = (i, j) => {
  var divID = `tmclass${i}-item-${j}-final-div`;
  document.getElementById(divID).removeAttribute("hidden");
};

let isFinalChecked = (i, j) => {
  var itemID = `tmclass${i}-item-${j}-final`;
  return document.getElementById(itemID).checked;
};

setInterval(function () {
  var hasChecked = false;
  for (var i = 0; i < 45; i++) {
    for (var j = 0; j < classItemArrays[i].length; j++) {
      if (isFinalChecked(i, j)) {
        var paragraph = document.getElementById("choice");
        paragraph.innerHTML = "<br>Вие сте избрали следните стоки и услуги:";
        hasChecked = true;
      }
    }
  }

  for (var i = 0; i < 45; i++) {
    for (var j = 0; j < classItemArrays[i].length; j++) {
      if (!isFinalChecked(i, j)) {
        hideFinalDiv(i, j);
      }
    }
  }

  if (!hasChecked) {
    var paragraph = document.getElementById("choice");
    paragraph.innerHTML = `
    <p style="text-align: center">&#8593;</p>
    <style>
    .required:after {
      content:" *";
      color: red;
    }
  </style>
  <div class="required">Моля изберете стоки и услуги!</div>`;
  }

  for (var i = 0; i < 45; i++) {
    hasChecked = false;
    for (var j = 0; j < classItemArrays[i].length; j++) {
      if (!isFinalChecked(i, j)) {
        hideFinalDiv(i, j);
      } else {
        hasChecked = true;
      }
    }

    if (!hasChecked) {
      hideFinalLegend(i);
    }
  }
}, 500);

document.write(`<fieldset id="classItemsCheckboxesForm-final"></fieldset>`);
let checkboxesFinal = ``;
for (var i = 0; i < 45; i++) {
  checkboxesFinal += `<legend id="legend-${i}-final" hidden="hidden">Клас ${
    i + 1
  }</legend>`;
  for (var j = 0; j < classItemArrays[i].length; j++) {
    const classText = classItemArrays[i][j];
    const itemID = `tmclass${i}-item-${j}-final`;
    checkboxesFinal += `
    <div id="${itemID}-div" class="fusion-form-checkbox" hidden="hidden">
        <input
          tabindex=""
          id="${itemID}"
          type="checkbox"
          value="tmclass${i + 1}"
          name="checkedclasses[]"
          class="fusion-form-input"
          data-holds-private-data="false"
        />
        <label for="${itemID}"> ${classText} </label>
    </div>`;
  }
}

var container = document.getElementById("classItemsCheckboxesForm-final");
var content = document.createElement("span");
content.innerHTML = checkboxesFinal;
container.appendChild(content);
