const fs = require('node:fs');

// const data = fs.readFileSync('original_items.json', "utf-8");
// const dataDir = JSON.parse(data);
//
// const pages =  27;
//
//
// let strippedDown = dataDir.map(e => {
//     return {
//         name: e.name
//     }
// })
//
// console.log(strippedDown.length)
//
// // split the array into pages and write to different files according to pages int
//
// let pagesArray = [];
//
// for (let i = 0; i < pages; i++) {
//     pagesArray.push(strippedDown.slice(i * strippedDown.length / pages, (i + 1) * strippedDown.length / pages))
// }
//
// console.log(pagesArray.reduce((acc, val) => acc + val.length, 0))
//
// console.log(pagesArray[0].length)
//
// for (let i = 0; i < pages; i++) {
//     fs.writeFileSync(`page_${ i + 1 }.json`, JSON.stringify(pagesArray[i]), 'utf-8');
// }

// combine all files "pages/*.json" into one file "combined.json"

// let combined = [];
//
// fs.readdirSync('items').forEach(file => {
//     const data = fs.readFileSync(`items/${file}`, 'utf-8');
//     const dataArr = JSON.parse(data);
//     combined = combined.concat(dataArr);
// });
//
// fs.writeFileSync('descriptions.json', JSON.stringify(combined, null, 2), 'utf-8');


// merge descriptions.json with all_items.json by name
// LOGG ALL ITEMS THAT ARE NOT IN DESCRIPTIONS.JSON

// descriptions.json
/*
[
    {
        "name": "air",
        "description": "Literally nothing, the void between blocks.",
        "value": 0,
        "rarity": 0
    },
    ...
]
*/

// all_items.json
/*
[
    {
        "id": 0,
        "name": "air",
        "displayName": "Air",
        "stackSize": 64
    },
    ...
]
*/
//
// const descriptions = JSON.parse(fs.readFileSync('descriptions.json', 'utf-8'));
// const items = JSON.parse(fs.readFileSync('all_items.json', 'utf-8'));
//
// let merged = items.map(item => {
//     const description = descriptions.find(e => e.name === item.name);
//     if (!description) {
//         console.log(`No description found for ${ item.name }`);
//     }
//     return {
//         ...item,
//         ...description,
//     };
// });
//
// fs.writeFileSync('merged.json', JSON.stringify(merged, null, 2), 'utf-8');
//

// read htdocs/data/collectables.json array and split them by rarity level from 0 - 4
// save in htdocs/data/lvl_{rarity}.json

const collectables = JSON.parse(fs.readFileSync('htdocs/data/collectable.json', 'utf-8'));

// collectable.json
/*
* [
  {
    "id": 0,
    "name": "air",
    "displayName": "Air",
    "stackSize": 64,
    "description": "Literally nothing, the void between blocks.",
    "value": 0,
    "rarity": 0
  },
  {
    "id": 1,
    "name": "stone",
    "displayName": "Stone",
    "stackSize": 64,
    "description": "Solid rock foundation of Minecraft's underground world.",
    "value": 20,
    "rarity": 0
  },
  ...
]
* */



// -----------------------------------------------------------------------
// collectable reducer

// collectable.json is an array with object and the object only need these properties:
// id, name, displayName, stackSize, description, value, rarity

// const data = JSON.parse(fs.readFileSync('htdocs/data/collectable.json', 'utf-8'));
//
// const reduced = data.map(e => {
//     return {
//         id: e.id,
//         name: e.name,
//         displayName: e.displayName,
//         stackSize: e.stackSize,
//         description: e.description,
//         value: e.value,
//         rarity: e.rarity
//     }
// });
//
// fs.writeFileSync('htdocs/data/collectable.json', JSON.stringify(reduced, null, 2), 'utf-8');
//

// -----------------------------------------------------------------------
// collectable image linker

// only write collectables in the json where the {name}.webp exists in htocs/assets/img/renders/

// const data = JSON.parse(fs.readFileSync('htdocs/data/collectable.json', 'utf-8'));
//
// const reduced = data.filter(e => {
//     return fs.existsSync(`htdocs/assets/img/renders/${ e.name }.webp`);
// });
//
// fs.writeFileSync('htdocs/data/collectable.json', JSON.stringify(reduced, null, 2), 'utf-8');


// rarity Splitter ------------------------------------------------------

let split = [[], [], [], [], []];

collectables.forEach(e => {
    split[e.rarity].push(e);
});

for (let i = 0; i < 5; i++) {
    fs.writeFileSync(`htdocs/data/lvl_${ i }.json`, JSON.stringify(split[i], null, 2), 'utf-8');
}
