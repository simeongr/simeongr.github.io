let checkboxes = ``;
for (var i = 0; i < 45; i++) {
  for (var j = 0; j < classItemArrays[i].length; j++) {
  const classText = classItemArrays[i][j];
  const itemID = `tmclass${i}-item-${j}`;
  checkboxes += `
    <div id="${itemID}-div" class="fusion-form-checkbox">
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

var container = document.getElementById("classItemsCheckboxesForm");
var content = document.createElement("span");
content.innerHTML = checkboxes;
container.appendChild(content);

let inputFilter = () => {
  let filterElementValue = document
    .getElementById("filter")
    .value.toLowerCase();

  for (var i = 0; i < classItemArrays.length; i++) {
  for (var j = 0; j < classItemArrays[i].length; j++){ 
    var divID = `tmclass${i}-item-${j}-div`
    var itemID = `tmclass${i}-item-${j}`;
    if (classItemArrays[i][j].toLowerCase().includes(filterElementValue)) {
      document.getElementById(`${divID}`).removeAttribute("hidden");
    } else {
      if (!document.getElementById(itemID).checked) {
        document
          .getElementById(`${divID}`)
          .setAttribute("hidden", "hidden");
      }
    }
  }
  }

  if (!filterElementValue) {
    for (var i = 0; i < classItemArrays.length; i++) {
      for (var j = 0; j < classItemArrays[i].length; j++){
      var itemID = `tmclass${i}-item-${j}-div`;
      document.getElementById(itemID).removeAttribute("hidden");
    }
  }
  }
};

let input = document.getElementById("filter");
input.addEventListener("input", inputFilter);
