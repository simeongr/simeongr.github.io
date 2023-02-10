let checkboxes1 = `
<div class="accordian fusion-accordian">
  <div class="panel-group" id="accordion-1776-2">
    <style type="text/css">
      .fusion-accordian
        #accordion-1776-2
        .panel-b33815b31fa94dcf1
        .panel-title
        a {
        color: #e76e53;
      }
      .fusion-accordian
        #accordion-1776-2
        .panel-b33815b31fa94dcf1
        .toggle-content {
        color: #4a4e57;
      }
    </style>
    <div class="fusion-panel panel-default panel-b33815b31fa94dcf1">
`;

for (var i = 0; i < 45; i++) {
  checkboxes1 += `
      <div class="panel-heading">
        <h4 class="panel-title toggle" id="toggle_b33815b31fa94dcf1">
          <a
            aria-expanded="false"
            aria-controls="b33815b31fa94dcf1"
            role="button"
            data-toggle="collapse"
            data-parent="#accordion-1776-2"
            data-target="#b33815b31fa94dcf1"
            href="#b33815b31fa94dcf1"
          >
            <span class="fusion-toggle-icon-wrapper" aria-hidden="true">
              <i
                class="fa-fusion-box active-icon awb-icon-minus"
                aria-hidden="true"
              ></i>
              <i
                class="fa-fusion-box inactive-icon awb-icon-plus"
                aria-hidden="true"
              ></i>
            </span>
            <span class="fusion-toggle-heading">Клас ${i+1}</span>
          </a>
        </h4>
      </div>
      <div
        id="b33815b31fa94dcf1"
        class="panel-collapse collapse"
        araia-labelledby="toggle_b33815b31fa94dcf1"
      >
        <div class="panel-body toggle-content fusion-clearfix">
          <ul>
            <li>Зеле</li>
            <li>Домати</li>
            <li>Картофи</li>
          </ul>
        </div>
      </div>
`
};
checkboxes1 += `
</div>
</div>
</div>
`;

document.write(checkboxes1)