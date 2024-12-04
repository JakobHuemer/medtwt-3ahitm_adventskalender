export function onResize(e) {
    // min blocks in horizontal: 60

    let minBlocksPerWidth = 30;
    let maxBlockSize = 70;

    let width = window.innerWidth;
    let blockSize = Math.floor(width / minBlocksPerWidth);

    if (blockSize > maxBlockSize) {
        blockSize = maxBlockSize;
    }

    document.documentElement.style.setProperty('--block-size', blockSize + "px");

    let mainSectionWidth = blockSize * minBlocksPerWidth;

    let offsetLeft = (width - mainSectionWidth) / 2;

    document.querySelector("main").style.left = offsetLeft + "px";
    document.querySelector("main").style.width = mainSectionWidth + "px";
}