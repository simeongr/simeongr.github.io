let itemcheckboxes = ""
for (var i = 0; i < 45; i++) {
    itemcheckboxes += `<fieldset> <legend>Клас ${i+1}</legend>`;
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
