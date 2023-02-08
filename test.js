function trimString(text, i) {
    if (text.length < 100) {
        return text;
    }

    return `${text.substring(0, 100)}<span id="dots${i}">...</span><span id="more${i}" style="display:none">${text.substring(100, text.length)}</span>`;
}

let checkboxes = `<fieldset>`
for (var i = 0; i < 45; i++) {
    classText = trimString(classes[i], i);
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
        <label for="checkbox-checkedclasses-1-${i}"> ${classText} </label>
        <a onclick="showMore(this, 'dots${i}', 'more${i}')">Покажи още</a>
    </div>`
}
checkboxes+=`</fieldset>`
document.write(checkboxes);