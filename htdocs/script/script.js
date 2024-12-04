import { onResize } from './util.js';
import { Block } from './Block.js';
import { BlockPane } from './BlockPane.js';

const main = document.querySelector('main');

window.addEventListener("resize", onResize);
onResize();

const b = new Block('ground/stone', 1, 1);
main.append(b);
