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
        this.style.background = `url("./assets/block/${ material }.webp") center / contain no-repeat`;
    }

    set x(x) {
        this._x = x;
        this.style.left = `calc(var(--block-size) * ${ x })`;
    }

    set y(y) {
        this._y = y;
        this.style.top = `calc(var(--block-size) * ${ y })`;
    }

}

// custom element
customElements.define('block-element', Block);