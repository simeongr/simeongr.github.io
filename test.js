let checkboxes = `<fieldset>`
for (var i = 0; i < 45; i++) {
    checkboxes += `
    <div id="tmclass${i}" class="fusion-form-checkbox">
        <input
          tabindex=""
          id="checkbox-checkedclasses-1-${i}"
          type="checkbox"
          value="tmclass${i+1}"
          name="checkedclasses[]"
          class="fusion-form-input"
          data-holds-private-data="false"
        />
        <label for="checkbox-checkedclasses-1-${i}">
            ${classes[i]}
        </label>
        <a onclick="showMore(this, 'dots${i}', 'more${i}')">Покажи още</a>
    </div>`
}
checkboxes+=`</fieldset>`
document.write(checkboxes);