'use strict';

const gProjList = [
  {
    id: 'sokoban',
    name: 'Shokoban',
    title: 'Better push those boxes',
    projImg: 'https://picsum.photos/200/300',
    desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: '#',
    publishedAt: new Data().getTime(),
    labels: ['Matrix', 'keyboard events'],
  },
  {
    id: 'sokoban',
    name: 'Shokoban',
    title: 'Better push those boxes',
    projImg: 'https://picsum.photos/200/300',
    desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: '#',
    publishedAt: new Data().getTime(),
    labels: ['Matrix', 'keyboard events'],
  },
  {
    id: 'sokoban',
    name: 'Shokoban',
    title: 'Better push those boxes',
    projImg: 'https://picsum.photos/200/300',
    desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: '#',
    publishedAt: new Data().getTime(),
    labels: ['Matrix', 'keyboard events'],
  },
  {
    id: 'sokoban',
    name: 'Shokoban',
    title: 'Better push those boxes',
    projImg: 'https://picsum.photos/200/300',
    desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: '#',
    publishedAt: new Data().getTime(),
    labels: ['Matrix', 'keyboard events'],
  },
  {
    id: 'sokoban',
    name: 'Shokoban',
    title: 'Better push those boxes',
    projImg: 'https://picsum.photos/200/300',
    desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: '#',
    publishedAt: new Data().getTime(),
    labels: ['Matrix', 'keyboard events'],
  },
  {
    id: 'sokoban',
    name: 'Shokoban',
    title: 'Better push those boxes',
    projImg: 'https://picsum.photos/200/300',
    desc: 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: '#',
    publishedAt: new Data().getTime(),
    labels: ['Matrix', 'keyboard events'],
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
