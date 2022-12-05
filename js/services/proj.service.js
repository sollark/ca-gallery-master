'use strict';

const gProjList = [
  {
    id: 'bookacademy',
    name: 'Book Academy',
    title: 'Book Shop',
    projImg: 'https://picsum.photos/350/300',
    desc: 'Description',
    url: 'https://sollark.github.io/book-shop/',
    publishedAt: 1670255248787,
    labels: ['javascript', 'css'],
  },
  {
    id: 'mines',
    name: 'Manes',
    title: 'Mines Game',
    projImg: 'https://picsum.photos/350/300',
    desc: 'Most famous game',
    url: 'https://sollark.github.io/mines/',
    publishedAt: 1672092000000,
    labels: ['javascript', 'css'],
  },
  // {
  //   id: 'sokoban',
  //   name: 'Shokoban',
  //   title: 'Better push those boxes',
  //   projImg: 'https://picsum.photos/200/300',
  //   desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //   url: '#',
  //   publishedAt: new Date().getTime(),
  //   labels: ['Matrix', 'keyboard events'],
  // },
  // {
  //   id: 'sokoban',
  //   name: 'Shokoban',
  //   title: 'Better push those boxes',
  //   projImg: 'https://picsum.photos/200/300',
  //   desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //   url: '#',
  //   publishedAt: new Date().getTime(),
  //   labels: ['Matrix', 'keyboard events'],
  // },
  // {
  //   id: 'sokoban',
  //   name: 'Shokoban',
  //   title: 'Better push those boxes',
  //   projImg: 'https://picsum.photos/200/300',
  //   desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //   url: '#',
  //   publishedAt: new Date().getTime(),
  //   labels: ['Matrix', 'keyboard events'],
  // },
  // {
  //   id: 'sokoban',
  //   name: 'Shokoban',
  //   title: 'Better push those boxes',
  //   projImg: 'https://picsum.photos/200/300',
  //   desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //   url: '#',
  //   publishedAt: new Date().getTime(),
  //   labels: ['Matrix', 'keyboard events'],
  // },
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
