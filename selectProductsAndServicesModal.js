// Put this in an Avada Code Block:
// <div class="fusion-form-field fusion-form-text-field fusion-form-label-above" style="" data-form-id="1773">
//   <div class="fusion-form-input-with-icon">
//     <i class="awb-form-icon fa-search fas"></i>
//     <input type="text" name="filter" id="filter" value="" class="fusion-form-input" placeholder="Филтрирай продуктите по ключова дума..." data-holds-private-data="false" minlength="0">
//   </div>
// </div>
// <script>document.write(`<fieldset id="classItemsCheckboxesForm"></fieldset>`)</script>
// <script type="application/javascript" src="https://simeongr.github.io/items.js"></script>
// <script "application/javascript" src="https://simeongr.github.io/classDefinitions.js"></script>
// <script type="application/javascript" src="https://simeongr.github.io/selectProductsAndServicesModal.js"></script>

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

const trimLength = 80;

// Trim class definition up to 100 characters
let trimString = (text, i) => {
  if (text.length < trimLength) {
    return text;
  }

  return `${text.substring(
    0,
    trimLength
  )}<span id="dots${i}">...</span><span id="more${i}" style="display:none">${text.substring(
    trimLength,
    text.length
  )}</span>`;
};

let showMore = (button, dotsID, moreID) => {
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
};

// Shows 'Покажи още' button when the class definition is more than 100 characters long
let showMoreButton = (text, i) => {
  if (text.length > trimLength) {
    return `<a onclick="showMore(this, 'dots${i}', 'more${i}')">Покажи още</a>`;
  }

  return "";
};

let checkboxes = `
<style>
.self-register-checkbox {
  margin-left: 10px;
}
</style>
`;
for (var i = 0; i < 45; i++) {
  const classText = `${trimString(classDefinitions[i], i)}`;
  const moreButton = showMoreButton(classDefinitions[i], i);
  
  checkboxes += `<legend id="legend-${i}"><i class="arrow right" id="arrow-${i}" onclick="rotateArrow('arrow-${i}', ${i})"></i> <span onclick="rotateArrow('arrow-${i}', ${i})">${classText}</span> ${moreButton}</legend>`;
  for (var j = 0; j < classItemArrays[i].length; j++) {
    const itemText = classItemArrays[i][j];
    const itemID = `tmclass${i}-item-${j}`;
    
    checkboxes += `
    <div id="${itemID}-div" class="fusion-form-checkbox self-register-checkbox" hidden="hidden">
        <input
          tabindex=""
          id="${itemID}"
          type="checkbox"
          value="клас ${i + 1}: ${itemText}"
          name="checkedclasses[]"
          class="fusion-form-input self-register-checkbox"
          data-holds-private-data="false"
          onClick="checkFinalDecision('legend-${i}', '${itemID}')"
        />
        <label for="${itemID}" class="self-register-checkbox"> ${itemText} </label>
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
        // rotateArrow('arrow-${i}', ${i}) // TODO: when searching for item, the arrow is not rotated down
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
