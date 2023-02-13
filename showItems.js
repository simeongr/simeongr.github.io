// <script>document.write(`<fieldset id="classItemsCheckboxesForm"></fieldset>`)</script>
import { classItemArrays } from "./items.js";

let itemcheckboxes = "";
for (var i = 0; i < 45; i++) {
  itemcheckboxes += `<fieldset id="tmclass${i}-item-list" hidden="hidden"> <legend>Клас ${
    i + 1
  }</legend>`;
  for (var j = 0; j < classItemArrays[i].length; j++) {
    const item = classItemArrays[i][j];
    itemcheckboxes += `
    <div id="tmclass${i + 1}-${item}" class="fusion-form-checkbox">
        <input
          tabindex=""
          id="checkbox-checkedItems-1-${i}-${item}"
          type="checkbox"
          value="tmclass${i + 1}-${item}"
          name="checkedItems[]"
          class="fusion-form-input"
          data-holds-private-data="false"
        />
        <label for="checkbox-checkedItems-1-${i}-${item}"> ${item} </label>
    </div>`;
  }
  itemcheckboxes += `</fieldset>`;
}

var container = document.getElementById("classItemsCheckboxesForm");
var content = document.createElement("span");
content.innerHTML = itemcheckboxes;
container.appendChild(content);

function inputItemsFilter() {
  let filterElementValue = document
    .getElementById("filterItems")
    .value.toLowerCase();

  for (var i = 0; i < classItemArrays.length; i++) {
    for (var j = 0; j < classItemArrays[i].length; j++) {
      const item = classItemArrays[i][j];
      const itemID = `checkbox-checkedItems-1-${i}-${item}`;
      if (item.toLowerCase().includes(filterElementValue)) {
        document.getElementById(itemID).removeAttribute("hidden");
      } else {
        if (!document.getElementById(itemID).checked) {
          document.getElementById(itemID).setAttribute("hidden", "hidden");
        }
      }
    }
  }

//   if (!filterElementValue) {
//     for (var i = 0; i < classDefinitions.length; i++) {
//       document.getElementById(checkboxIDs[i]).removeAttribute("hidden");
//     }
//   }
}

let input = document.getElementById("filterItems");
input.addEventListener("input", inputItemsFilter);
