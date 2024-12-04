export let BLOCK_SIZE = 70;
export const BLOCKS_PER_WIDTH = 70;

export function onResize(e) {
    // min blocks in horizontal: 60

    let minBlocksPerWidth = BLOCKS_PER_WIDTH;
    let maxBlockSize = 70;

    let width = window.innerWidth;
    let blockSize = Math.floor(width / minBlocksPerWidth);

    if (blockSize > maxBlockSize) {
        blockSize = maxBlockSize;
    }

    BLOCK_SIZE = blockSize;

    let mainSectionWidth = BLOCK_SIZE * minBlocksPerWidth;

    let offsetLeft = (width - mainSectionWidth) / 2;
    document.documentElement.style.setProperty('--block-size', BLOCK_SIZE + "px");
    document.documentElement.style.setProperty('--offset-left', offsetLeft + 'px');

    document.querySelector("main").style.left = offsetLeft + "px";
    document.querySelector("main").style.width = mainSectionWidth + "px";
    document.body.style.background = `url("./assets/block/ground/dirt.webp") ${ offsetLeft }px 0 / left top no-repeat`;
}