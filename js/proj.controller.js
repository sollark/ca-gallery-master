'use strict';

$(initPage);

function initPage() {
  console.log('Ready');
  renderProjs();
}

function renderProjs() {
  console.log('in renderProjs');
  const projs = getProjs();
  const $container = $('.proj-container');

  // let strHTML = '<h1>test</h1>';
  $container.html('hello');

  $container.html(
    projs.map((proj) => {
      const { id, name, title, projImg, desc, url, publishedAt, labels } = proj;

      let strHTML = '';
      strHTML += `<div class="col-md-4 col-sm-6 portfolio-item">\n`;
      strHTML += `<a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">\n`;
      strHTML += `<div class="portfolio-hover">\n`;
      strHTML += `<div class="portfolio-hover-content">\n`;
      strHTML += `<i class="fa fa-plus fa-3x"></i>\n`;
      strHTML += `</div>\n`;
      strHTML += `</div>\n`;
      strHTML += `<img class="img-fluid" src="${projImg}" alt="">\n`;
      strHTML += `</a>\n`;
      strHTML += `<div class="portfolio-caption">\n`;
      strHTML += `<h4>${title}</h4>\n`;
      strHTML += `<p class="text-muted">${desc}</p>\n`;
      strHTML += `</div>\n`;
      strHTML += `</div>\n`;

      return strHTML;
    })
  );
}
