import { Block } from './Block.js';

export class BlockPane extends HTMLElement {

    constructor(material, x, y, blocks = []) {
        super();

        this.material = material;
        this.x = x;
        this.y = y;

        this.blocksArray = [];

        blocks.forEach(block => {
            if (block instanceof Block) {
                this.addBlock(block);
            } else if (Array.isArray(block) && block.length === 2) {
                this.createBlock(block[0], block[1]);
            }
        });

    }

    set x(x) {
        this._x = x;
        this.style.left = `calc(var(--block-size) * ${ x })`;
    }

    set y(y) {
        this._y = y;
        this.style.top = `calc(var(--block-size) * ${ y })`;
    }

    createBlock(x, y) {
        let block = new Block(this.material, x, y);
        this.addBlock(block);
    }

    addBlock(block) {
        this.blocksArray.push(block);
        this.appendChild(block);
    }


}

customElements.define('block-pane', BlockPane, { extends: 'div' });