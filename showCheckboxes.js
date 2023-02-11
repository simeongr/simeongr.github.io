import { classDefinitions } from './classDefinitions.js';
import { classItemArrays } from './items.js';

// Lists all 45 TM classes as checkboxes
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

function showMoreButton(text, i) {
  if (text.length > 100) {
    return `<a onclick="showMore(this, 'dots${i}', 'more${i}')">Покажи още</a>`;
  }

  return "";
}

export function showCheckboxes() {
  let checkboxes = `<fieldset>`;
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
        />
        <label for="checkbox-checkedclasses-1-${i}"> ${classText} </label>
        ${moreButton}
    </div>`;
  }
  checkboxes += `</fieldset>`;
  document.write(checkboxes);

  let itemcheckboxes = "";
  for (var i = 0; i < 45; i++) {
    itemcheckboxes += `<fieldset id="classItem-${i}" hidden="hidden"> <legend>Клас ${
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

  document.write(itemcheckboxes);
}
