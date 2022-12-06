'use strict';

$(initPage);

function initPage() {
  console.log('Ready');
  renderProjs();
  renderModal();
}

function renderProjs() {
  console.log('in renderProjs');
  const projs = getProjs();
  const $container = $('.proj-container');

  $container.html(
    projs.map((proj, idx) => {
      const { id, name, title, projImgSmall, desc, url, publishedAt, labels } =
        proj;
      console.log('projImgSmall:', projImgSmall);

      let strHTML = '';
      strHTML += `<div class="col-md-4 col-sm-6 portfolio-item">\n`;
      strHTML += `<a class="portfolio-link" 
                    data-toggle="modal" 
                    href="#portfolioModal${idx + 1}">\n`;
      strHTML += `<div class="portfolio-hover">\n`;
      strHTML += `<div class="portfolio-hover-content">\n`;
      strHTML += `<i class="fa fa-plus fa-3x"></i>\n`;
      strHTML += `</div>\n`;
      strHTML += `</div>\n`;
      strHTML += `<img class="img-fluid" src="${projImgSmall}" alt="">\n`;
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

function renderModal() {
  console.log('in renderModals');

  const projs = getProjs();
  const $containers = $('.modal-body');
  console.log('containers', $containers);

  $.each($containers, (index, el) => {
    const $title = $(el).find('h2');
    $title.html(projs[index].title);

    const $img = $(el).find('img');
    $img.prop('src', projs[index].projImgBig);

    const $desc = $(el).find('.item-desc');
    $desc.html(projs[index].fullDesc);

    console.log(projs[index].fullDesc);
    console.log($(el).find('.item-desc'));
  });
}
/* 
 <h2>Project Name</h2>
                  <p class="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="img/portfolio/01-full.jpg"
                    alt="" />
                  <p>
                    Use this area to describe your project. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Est blanditiis
                    dolorem culpa incidunt minus dignissimos deserunt repellat
                    aperiam quasi sunt officia expedita beatae cupiditate,
                    maiores repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                  </ul>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button">
                    <i class="fa fa-times"></i>
                    Close Project
                  </button>
 */
