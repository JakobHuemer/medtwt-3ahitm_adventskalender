import { Block } from './Block.js';

export class BlockPane extends Block {
    constructor(material, x, y, width, height) {
        super(material, x, y);

        this.width = width;
        this.height = height;

    }

    set width(width) {
        this._width = width;
        this.style.width = `calc(var(--block-size) * ${width})`
    }

    set height(height) {
        this._height = height;
        this.style.height = `calc(var(--block-size) * ${ height })`;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    clone() {
        return new BlockPane(this.material, this.x, this.y, this.width, this.height);
    }

}

customElements.define("block-pane", BlockPane)