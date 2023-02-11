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

// Trim class definition up to 100 characters
function trimString(text, i) {
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

// Shows 'Покажи още' button when the class definition is more than 100 characters long
function showMoreButton(text, i) {
  if (text.length > 100) {
    return `<a onclick="showMore(this, 'dots${i}', 'more${i}')">Покажи още</a>`;
  }

  return "";
}

function showClassItems(c, classID) {
  const itemID = `${classID}-item-list`;
  if (c.checked) {
    document.getElementById(itemID).removeAttribute("hidden");
  } else {
    document.getElementById(itemID).setAttribute("hidden", "hidden");
  }
}

// List all 45 class definition as checkboxes
export function showClassDefinitions() {
  let checkboxes = ``;
  for (var i = 0; i < 45; i++) {
    const classText = trimString(classDefinitions[i], i);
    const moreButton = showMoreButton(classDefinitions[i], i);
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
          onClick=`showClassItems(this, tmclass${i + 1});`
        />
        <label for="checkbox-checkedclasses-1-${i}"> ${classText} </label>
        ${moreButton}
    </div>`;
  }

  // var content = (document.createElement("span").innerHTML = checkboxes);
  // document.getElementById("classCheckboxesForm").appendChild(content);

  var container = document.getElementById("classCheckboxesForm");
  var content = document.createElement("span");
  content.innerHTML = checkboxes;
  container.appendChild(content);
}
