'use strict';

const gProjList = [
  {
    id: 'bookacademy',
    name: 'Book Academy',
    title: 'Book Shop',
    projImgSmall: 'img/portfolio/book.shop-thumbnail.png',
    projImgBig: 'img/portfolio/book.shop-full.png',
    desc: 'Online book shop',
    fullDesc:
      "The Book Academy is an online internet shop specialized on selling books, created to help book shops and readers alike. This e-store offers many features that a regular book shop may not provide, and we've done so in order to make your time as a customer as easy and enjoyable as possible.",
    url: 'https://sollark.github.io/book-shop/',
    publishedAt: 1670255248787,
    labels: ['javascript', 'css'],
  },
  {
    id: 'mines',
    name: 'Manes',
    title: 'Mines Game',
    projImgSmall: 'img/portfolio/mines-thumbnail.png',
    projImgBig: 'img/portfolio/mines-full.png',
    desc: 'Most famous game',
    fullDesc:
      "MInes is an addictive puzzle game that will entertain you for hours, with different game levels. It's a fun and challenging way to keep your brain sharp. You need to find mines in a minefield so clear th field and make it safe. You can also use dogs to discover close mines before they explode.",
    url: 'https://sollark.github.io/mines/',
    publishedAt: 1672092000000,
    labels: ['javascript', 'css'],
  },
  {
    id: 'balloons',
    name: 'Balloons',
    title: 'Balloon Game',
    projImgSmall: 'img/portfolio/balloons-thumbnail.png',
    projImgBig: 'img/portfolio/balloons-full.png',
    desc: 'Test your reaction',
    fullDesc:
      "If you're looking for a fun, calorie-free time-waster, look no further than Balloons - the latest and greatest in balloon popping technology. Blast as many balloons as you can. You're sure to be entertained for hours on end.",
    url: 'https://sollark.github.io/balloons/',
    publishedAt: 1670305568480,
    labels: ['javascript', 'css'],
  },
];

const RANDOM_PROJ_IMG = 'https://picsum.photos/200/300';

function getProjs() {
  return gProjList;
}

function getProjById(projId) {
  const proj = gProjList.find((proj) => projId === proj.id);
  return proj;
}

function _createProj(id, name, title, desc, projImg, url, publishedAt, labels) {
  return {
    id,
    name,
    title,
    desc,
    projImg: projImg || RANDOM_PROJ_IMG,
    url: url || '#',
    publishedAt: publishedAt || new Date().getTime(),
    labels: labels || ['label', 'label', 'label', 'label', 'label'],
  };
}
