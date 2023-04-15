// Put this is Avada Code Block:
// <div class="fusion-text fusion-text-2">
//     <p id="choice" style="text-align: center;">
//         Моля изберете стоки и услуги!
//     </p>
// </div>
// <script "application/javascript" src="https://simeongr.github.io/final-choice.js"></script>

setInterval(function() {
    var hasChecked = false
    for (var i = 0; i < 45; i++) {
        for (var j = 0; j < classItemArrays[i].length; j++) {
            if (document.getElementById(`tmclass${i}-item-${j}-final`).checked) {
                var paragraph = document.getElementById("choice");
                paragraph.innerHTML = "Вие сте избрали следните стоки и услуги:";
                hasChecked = true;
            }
        }
    }

    if (!hasChecked) {
        var paragraph = document.getElementById("choice");
        paragraph.innerHTML = "Моля изберете стоки и услуги!";
    }

  }, 500);
  

document.write(`<fieldset id="classItemsCheckboxesForm-final"></fieldset>`)
let checkboxesFinal = ``;
for (var i = 0; i < 45; i++) {
  checkboxesFinal += `<legend id="legend-${i}-final" hidden="hidden">Клас ${i + 1}</legend>`
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
