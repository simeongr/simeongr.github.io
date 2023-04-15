// Put this is Avada Code Block:
// <div class="fusion-text fusion-text-2">
//     <p id="choise" style="text-align: center;">
//         Вие сте избрали следните стоки и услуги:
//     </p>
// </div>
// <script "application/javascript" src="https://simeongr.github.io/final-choice.js"></script>

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
