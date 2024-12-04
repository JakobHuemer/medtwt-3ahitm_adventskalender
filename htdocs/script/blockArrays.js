import { BlockGroup } from './BlockGroup.js';
import { BlockPane } from './BlockPane.js';
import { Block } from './Block.js';

const TITLE_MATERIAL = 'wool/black_wool';

export const TITLE_A = new BlockGroup(TITLE_MATERIAL, 0, 0, [
    new BlockPane(TITLE_MATERIAL, 0, 0, 1, 5),
    new Block(TITLE_MATERIAL, 1, 0),
    new Block(TITLE_MATERIAL, 1, 2),
    new BlockPane(TITLE_MATERIAL, 2, 0, 1, 5),
]);

export const TITLE_D = new BlockGroup(TITLE_MATERIAL, 0, 0, [
    new BlockPane(TITLE_MATERIAL, 0, 0, 1, 5),
    new BlockPane(TITLE_MATERIAL, 1, 0, 2, 1),
    new BlockPane(TITLE_MATERIAL, 1, 4, 2, 1),
    new BlockPane(TITLE_MATERIAL, 3, 1, 1, 3),
]);

export const TITLE_V = new BlockGroup(TITLE_MATERIAL, 0, 0, [
    new BlockPane(TITLE_MATERIAL, 0, 0, 1, 2),
    new BlockPane(TITLE_MATERIAL, 1, 2, 1, 2),
    new BlockPane(TITLE_MATERIAL, 4, 0, 1, 2),
    new BlockPane(TITLE_MATERIAL, 3, 2, 1, 2),
    new Block(TITLE_MATERIAL, 2, 4),
]);

export const TITLE_E = new BlockGroup(TITLE_MATERIAL, 0, 0, [
    new BlockPane(TITLE_MATERIAL, 0, 0, 1, 5),
    new BlockPane(TITLE_MATERIAL, 1, 0, 2, 1),
    new BlockPane(TITLE_MATERIAL, 1, 2, 2, 1),
    new BlockPane(TITLE_MATERIAL, 1, 4, 2, 1),
]);

export const TITLE_N = new BlockGroup(TITLE_MATERIAL, 0, 0, [
    new BlockPane(TITLE_MATERIAL, 0, 0, 1, 5),
    new BlockPane(TITLE_MATERIAL, 3, 0, 1, 5),
    new Block(TITLE_MATERIAL, 1, 1),
    new Block(TITLE_MATERIAL, 1, 2),
    new Block(TITLE_MATERIAL, 2, 2),
    new Block(TITLE_MATERIAL, 2, 3),
]);

export const TITLE_T = new BlockGroup(TITLE_MATERIAL, 0, 0, [
    new BlockPane(TITLE_MATERIAL, 0, 0, 3, 1),
    new BlockPane(TITLE_MATERIAL, 1, 1, 1, 4),
]);

export const TITLE_K = new BlockGroup(TITLE_MATERIAL, 0, 0, [
    new BlockPane(TITLE_MATERIAL, 0, 0, 1, 5),
    new BlockPane(TITLE_MATERIAL, 2, 0, 1, 2),
    new BlockPane(TITLE_MATERIAL, 2, 3, 1, 2),
    new Block(TITLE_MATERIAL, 1, 2),
]);

export const TITLE_L = new BlockGroup(TITLE_MATERIAL, 0, 0, [
    new BlockPane(TITLE_MATERIAL, 0, 0, 1, 5),
    new BlockPane(TITLE_MATERIAL, 1, 4, 2, 1),
]);

export const TITLE_R = new BlockGroup(TITLE_MATERIAL, 0, 0, [
    new BlockPane(TITLE_MATERIAL, 0, 0, 1, 5),
    new BlockPane(TITLE_MATERIAL, 2, 0, 1, 2),
    new BlockPane(TITLE_MATERIAL, 2, 3, 1, 2),
    new Block(TITLE_MATERIAL, 1, 0),
    new Block(TITLE_MATERIAL, 1, 2),
]);

const titleAdventCalendar = new BlockGroup(TITLE_MATERIAL, 2, 4, []);
titleAdventCalendar.addGroupAt(TITLE_A, 0, 0);
titleAdventCalendar.addGroupAt(TITLE_D, 4, 0);
titleAdventCalendar.addGroupAt(TITLE_V, 9, 0);
titleAdventCalendar.addGroupAt(TITLE_E, 15, 0);
titleAdventCalendar.addGroupAt(TITLE_N, 19, 0);
titleAdventCalendar.addGroupAt(TITLE_T, 24, 0);
titleAdventCalendar.addGroupAt(TITLE_K, 28, 0);
titleAdventCalendar.addGroupAt(TITLE_A, 32, 0);
titleAdventCalendar.addGroupAt(TITLE_L, 36, 0);
titleAdventCalendar.addGroupAt(TITLE_E, 40, 0);
titleAdventCalendar.addGroupAt(TITLE_N, 44, 0);
titleAdventCalendar.addGroupAt(TITLE_D, 49, 0);
titleAdventCalendar.addGroupAt(TITLE_E, 54, 0);
titleAdventCalendar.addGroupAt(TITLE_R, 58, 0);

export const TITLE_ADVENT_CALENDAR = titleAdventCalendar;