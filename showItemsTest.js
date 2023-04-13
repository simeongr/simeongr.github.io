let checkFinalDecision = (legendID, itemID) => {
  var legendIDfinal = `${legendID}-final`;
  var itemIDfinal = `${itemID}-final`;
  var divIDfinal = `${itemIDfinal}-div`;

  if (!document.getElementById(itemIDfinal).checked) {
    document.getElementById(legendIDfinal).removeAttribute("hidden");
    document.getElementById(divIDfinal).removeAttribute("hidden");
    document.getElementById(itemIDfinal).checked = true;
  } else {
    document.getElementById(legendIDfinal).setAttribute("hidden", "hidden");
    document.getElementById(divIDfinal).setAttribute("hidden", "hidden");
    document.getElementById(itemIDfinal).checked = false;
  }
};

let rotateArrow = (arrowID, index) => {
  var arrow = document.getElementById(arrowID);
  var arrowOrientation = arrow.className;
  if (arrowOrientation === "arrow right") {
    arrow.className = "arrow down";
    for (var i = 0; i < classItemArrays[index].length; i++) {
      var divID = `tmclass${index}-item-${i}-div`;
      document.getElementById(`${divID}`).removeAttribute("hidden");
    }
  } else {
    arrow.className = "arrow right";
    for (var i = 0; i < classItemArrays[index].length; i++) {
      var divID = `tmclass${index}-item-${i}-div`;
      document.getElementById(`${divID}`).setAttribute("hidden", "hidden");
    }
  }
};

let checkboxes = ``;
for (var i = 0; i < 45; i++) {
  checkboxes += `<legend id="legend-${i}"><i class="arrow down" id="arrow-${i}" onclick="rotateArrow('arrow-${i}', ${i})"></i> <div onclick="rotateArrow('arrow-${i}', ${i})>Клас ${
    i + 1
  }</div></legend>`;
  for (var j = 0; j < classItemArrays[i].length; j++) {
    const classText = classItemArrays[i][j];
    const itemID = `tmclass${i}-item-${j}`;
    checkboxes += `
    <div id="${itemID}-div" class="fusion-form-checkbox">
        <input
          tabindex=""
          id="${itemID}"
          type="checkbox"
          value="клас ${i + 1}: ${classText}"
          name="checkedclasses[]"
          class="fusion-form-input"
          data-holds-private-data="false"
          onClick="checkFinalDecision('legend-${i}', '${itemID}')"
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
    var showLegend = false;
    for (var j = 0; j < classItemArrays[i].length; j++) {
      var divID = `tmclass${i}-item-${j}-div`;
      var legendID = `legend-${i}`;
      var itemID = `tmclass${i}-item-${j}`;
      if (classItemArrays[i][j].toLowerCase().includes(filterElementValue)) {
        document.getElementById(`${legendID}`).removeAttribute("hidden");
        document.getElementById(`${divID}`).removeAttribute("hidden");
        showLegend = true;
      } else {
        if (!document.getElementById(itemID).checked) {
          document.getElementById(`${divID}`).setAttribute("hidden", "hidden");
          if (!showLegend) {
            document
              .getElementById(`${legendID}`)
              .setAttribute("hidden", "hidden");
          }
        }
      }
    }
  }

  if (!filterElementValue) {
    for (var i = 0; i < classItemArrays.length; i++) {
      for (var j = 0; j < classItemArrays[i].length; j++) {
        var legendID = `legend-${i}`;
        var itemID = `tmclass${i}-item-${j}-div`;
        document.getElementById(legendID).removeAttribute("hidden");
        document.getElementById(itemID).removeAttribute("hidden");
      }
    }
  }
};

let input = document.getElementById("filter");
input.addEventListener("input", inputFilter);
