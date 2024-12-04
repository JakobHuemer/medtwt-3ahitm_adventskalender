import { BLOCK_SIZE, BLOCKS_PER_WIDTH, onResize } from './util.js';
import { BlockPane } from './BlockPane.js';
import { TITLE_A, TITLE_ADVENT_CALENDAR } from './blockArrays.js';

const main = document.querySelector('main');

window.addEventListener('resize', onResize);
onResize();


TITLE_ADVENT_CALENDAR.x = (BLOCKS_PER_WIDTH - TITLE_ADVENT_CALENDAR.getBoundingBox().width) / 2 - 1;

const blockPane = new BlockPane('grid', 5, 5, 6, 3);

main.append(TITLE_ADVENT_CALENDAR);