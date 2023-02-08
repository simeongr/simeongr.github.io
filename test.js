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
        <label for="checkbox-checkedclasses-1-${i}"
          ><b>Клас 01</b>: Химически продукти, предназначени за промишлеността,
          науката, фотографията,<span id="dots${i}">...</span><span id="more${i}" style="display:none"> селското стопанство, градинарството и горското
          стопанство; изкуствени смоли в необработено състояние, пластмаси в
          необработено състояние; пожарогасителни и противопожарни състави;
          препарати за закаляване и заваряване на метали; вещества за дъбене на
          животински кожи и кожи с косъм; адхезиви (лепливи вещества), предназначени
          за промишлеността; замазки и други пълнители във вид на паста (кит);
          компост, животински торове, торове; биологични препарати за употреба в
          промишлеността и науката.</span></label>
          <a onclick="showMore(this, 'dots${i}', 'more${i}')">Покажи още</a>
    </div>`
}
checkboxes+=`</fieldset>`
document.write(checkboxes);