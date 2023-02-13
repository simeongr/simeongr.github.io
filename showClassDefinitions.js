// These functions require to add:
// <script>document.write(`<fieldset id="classCheckboxesForm"></fieldset>`)</script>
// in WP code block
//
// Example:
//
// <script>document.write(`<fieldset id="classCheckboxesForm"></fieldset>`)</script>
// <script type='module' src="https://simeongr.github.io/functions.js"></script>

import { classDefinitions } from "./classDefinitions.js";
import { classItemArrays } from "./items.js";
import { checkboxIDs, checkboxInputIDs } from './ids.js';
import { classItems } from './classItems.js';

// Trim class definition up to 100 characters
let trimString =  (text, i) => {
  if (text.length < 100) {
    return text;
  }

  return `${text.substring(
    0,
    100
  )}<span id="dots${i}">...</span><span id="more${i}" style="display:none">${text.substring(
    100,
    text.length
  )}</span>`;
}

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
}

// Shows 'Покажи още' button when the class definition is more than 100 characters long
let showMoreButton = (text, i)=> {
  if (text.length > 100) {
    return `<a onclick="showMore(this, 'dots${i}', 'more${i}')">Покажи още</a>`;
  }

  return "";
}

let showClassItems = (c, classID) => {
  const itemID = `${classID}-item-list`;
  if (c.checked) {
    document.getElementById(itemID).removeAttribute("hidden");
  } else {
    document.getElementById(itemID).setAttribute("hidden", "hidden");
  }
}

// List all 45 class definition as checkboxes
// export function showClassDefinitions() {
  let checkboxes = ``;
  for (var i = 0; i < 45; i++) {
    const classText = trimString(classDefinitions[i], i);
    const moreButton = showMoreButton(classDefinitions[i], i);
    const itemID = `tmclass${i}`;
    checkboxes += `
    <div id="tmclass${i + 1}" class="fusion-form-checkbox">
        <input
          tabindex=""
          id="checkbox-checkedclasses-1-${i}"
          type="checkbox"
          value="tmclass${i + 1}"
          name="checkedclasses[]"
          class="fusion-form-input"
          data-holds-private-data="false"
          onClick="showClassItems(this, '${itemID}')"
        />
        <label for="checkbox-checkedclasses-1-${i}"> ${classText} </label>
        ${moreButton}
    </div>`;
  }

  var container = document.getElementById("classCheckboxesForm");
  var content = document.createElement("span");
  content.innerHTML = checkboxes;
  container.appendChild(content);
// }

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
