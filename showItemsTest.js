let checkboxes = ``;
for (var i = 0; i < 45; i++) {
  for (var j = 0; j < classItemArrays[i].length; j++) {
  const classText = classItemArrays[i][j];
  const itemID = `tmclass${i}-item-${j}`;
  checkboxes += `
    <div id="tmclass${i + 1}" class="fusion-form-checkbox">
        <input
          tabindex=""
          id="${itemID}"
          type="checkbox"
          value="tmclass${i + 1}"
          name="checkedclasses[]"
          class="fusion-form-input"
          data-holds-private-data="false"
          onClick="showClassItems(this, '${itemID}')"
        />
        <label for="${itemID}"> ${classText} </label>
    </div>`;
  }
}

var container = document.getElementById("classItemsCheckboxesForm");
var content = document.createElement("span");
content.innerHTML = checkboxes;
container.appendChild(content);
// }

let inputFilter = () => {
  let filterElementValue = document
    .getElementById("filter")
    .value.toLowerCase();

  for (var i = 0; i < classItemArrays.length; i++) {
  for (var j = 0; j < classItemArrays[i].length; j++){ 
    if (classItemArrays[i][j].toLowerCase().includes(filterElementValue)) {
      document.getElementById(checkboxIDs[i]).removeAttribute("hidden");
    } else {
      // if (!document.getElementById(checkboxInputIDs[i]).checked) {
        document
          .getElementById(checkboxIDs[i])
          .setAttribute("hidden", "hidden");
      // }
    }
  }
  }

  // if (!filterElementValue) {
  //   for (var i = 0; i < classDefinitions.length; i++) {
  //     document.getElementById(checkboxIDs[i]).removeAttribute("hidden");
  //   }
  // }
};

let input = document.getElementById("filter");
input.addEventListener("input", inputFilter);
