import { Block } from './Block.js';

export class BlockGroup extends Block {

    /**
     * @param material
     * @param x
     * @param y
     * @param blocks { (number[]|Block|BlockGroup)[] }
     */
    constructor(material, x, y, blocks = []) {
        super(material, x, y);

        this.material = material;

        this.blocksArray = [];

        blocks.forEach(toAddItem => {
            if (toAddItem instanceof Block) {
                this.addBlock(toAddItem);
            } else if (toAddItem instanceof BlockGroup) {
                this.addGroupAt(toAddItem, 0, 0);
            } else if (Array.isArray(toAddItem) && toAddItem.length === 2) {
                this.createBlock(toAddItem[0], toAddItem[1]);
            }
        });

    }

    set material(material) {
        this._material = material;
    }

    get material() {
        return this._material;
    }

    get blocks() {
        return this.blocksArray;
    }

    createBlock(x, y) {
        let block = new Block(this.material, x, y);
        this.addBlock(block);
    }

    addBlock(block) {
        this.blocksArray.push(block);
        this.appendChild(block);
    }

    addGroupAt(group, x, y) {
        let newGroup = group.clone();

        let toAddBlocks = newGroup.blocks.map(b => {
            b.x += x;
            b.y += y;
            return b;
        });
        this.addBlocks(...newGroup.blocks);
    }

    addBlocks(...blocks) {
        blocks.forEach(b => this.addBlock(b));
    }

    clone() {
        return new BlockGroup(this.material, this.x, this.y,
            this.blocks.map(b => b.clone()),
        );
    }

    getBoundingBox() {
        let minX = Number.MAX_SAFE_INTEGER;
        let minY = Number.MAX_SAFE_INTEGER;
        let maxX = Number.MIN_SAFE_INTEGER;
        let maxY = Number.MIN_SAFE_INTEGER;

        this.blocks.forEach(b => {
            if (b.x < minX) {
                minX = b.x;
            }
            if (b.y < minY) {
                minY = b.y;
            }
            if (b.x > maxX) {
                maxX = b.x;
            }
            if (b.y > maxY) {
                maxY = b.y;
            }
        });

        return {
            x: minX,
            y: minY,
            width: maxX - minX + 1,
            height: maxY - minY + 1,
        }
    }
}

customElements.define('block-group', BlockGroup);