let itemCheckboxes = ``;
for (var i = 0; i < 45; i++) {
  itemCheckboxes += `<fieldset id="tmclass${i}-item-list">`;
  for (var j = 0; j < classItemArrays[i].length; j++) {
    const item = classItemArrays[i][j];
    itemCheckboxes += `
    <div id="tmclass${i + 1}-${item}" class="fusion-form-checkbox">
        <input
          tabindex=""
          id="checkbox-checkedItems-1-${i}"
          type="checkbox"
          value="tmclass${i + 1}-${item}"
          name="checkedItems[]"
          class="fusion-form-input"
          data-holds-private-data="false"
        />
        <label for="checkbox-checkedItems-1-${i}"> ${item} </label>
    </div>`;
  }
  itemCheckboxes += `</fieldset>`;
}

var container = document.getElementById("classItemsCheckboxesForm");
var content = document.createElement("span");
content.innerHTML = itemCheckboxes;
container.appendChild(content);

function inputItemsFilter() {
  let filterElementValue = document
    .getElementById("filterItems")
    .value.toLowerCase();

  for (var i = 0; i < classItemArrays.length; i++) {
    for (var j = 0; j < classItemArrays[i].length; j++) {
      const item = classItemArrays[i][j];
      const itemID = `checkbox-checkedItems-1-${i}`;
      if (item.toLowerCase().includes(filterElementValue)) {
        console.log("in the if with item: ", item);
        document.getElementById(itemID).removeAttribute("hidden");
      } else {
        console.log("in the else: ", item);
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

let filterItemsInput = document.getElementById("filterItems");
filterItemsInput.addEventListener("filterItemsInput", inputItemsFilter);
