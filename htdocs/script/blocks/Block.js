export class Block extends HTMLElement {
    constructor(material, x, y) {
        super();

        // if any param is null or undefined throw an error
        if (material == null || x == null || y == null) {
            throw new Error('All parameters must be defined');
    }

        this.x = x;
        this.y = y;
        this.material = material;
    }

    set material(material) {
        this._material = material;
        this.style.background = `url("./assets/block/${ material }.webp") left top / var(--block-size)`;
    }

    get material() {
        return this._material;
    }

    set x(x) {
        this._x = Math.round(x);
        this.style.left = `calc(var(--block-size) * ${ this._x })`;
    }

    get x() {
        return this._x;
    }

    set y(y) {
        this._y = Math.round(y);
        this.style.top = `calc(var(--block-size) * ${ this._y })`;
    }

    get y() {
        return this._y;
    }

    clone() {
        return new Block(this.material, this.x, this.y);
    }

}

// custom element
customElements.define('block-element', Block);