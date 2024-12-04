const fs = require('node:fs');
const http = require('http');

async function calculateDropPercentages(callTimes) {
    // Array to store all drops from requests
    const allDrops = [];

    // Make multiple requests
    for (let i = 0; i < callTimes; i++) {
        try {
            const response = await fetch('http://127.0.0.1:8080/api/open.php?box=2');
            const data = await response.json();
            allDrops.push(...data.data.drops);
        } catch (error) {
            console.error(`Request ${i + 1} failed:`, error);
        }
    }

    // Calculate total number of drops
    const totalDrops = allDrops.length;

    // Get unique rarities dynamically
    const uniqueRarities = [...new Set(allDrops.map(drop => drop.rarity))].sort((a, b) => a - b);

    // Calculate percentage distribution dynamically
    const dropCounts = {};
    uniqueRarities.forEach(rarity => {
        dropCounts[rarity] = allDrops.filter(d => d.rarity === rarity).length;
    });

    const dropPercentages = {};
    uniqueRarities.forEach(rarity => {
        dropPercentages[rarity] = ((dropCounts[rarity] / totalDrops) * 100).toFixed(2);
    });

    // Print results
    console.log('Total Requests:', callTimes);
    console.log('Total Drops:', totalDrops);
    console.log('Drop Percentages:');
    Object.entries(dropPercentages).forEach(([rarity, percentage]) => {
        console.log(`Rarity ${rarity}: ${percentage}%`);
    });

    // Verify total adds up to 100%
    const totalPercentage = Object.values(dropPercentages)
        .reduce((sum, percentage) => sum + parseFloat(percentage), 0);

    console.log('Total Percentage:', totalPercentage.toFixed(2) + '%');

    return dropPercentages;
}


calculateDropPercentages(100);


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

// const collectables = JSON.parse(fs.readFileSync('htdocs/data/collectable.json', 'utf-8'));

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

// let split = [[], [], [], [], []];
//
// collectables.forEach(e => {
//     split[e.rarity].push(e);
// });
//
// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(`htdocs/data/lvl_${ i }.json`, JSON.stringify(split[i], null, 2), 'utf-8');
// }


// -----------------------------------------------------------------------
// webp
// convert all png files in p = "htdocs/assets/block" recursively to webp


// const path = require('path');
// const sharp = require('sharp');
//
// async function convertPngToWebp(directory) {
//     try {
//         const files = await fs.promises.readdir(directory, { withFileTypes: true });
//
//         for (const file of files) {
//             const fullPath = path.join(directory, file.name);
//
//             if (file.isDirectory()) {
//                 await convertPngToWebp(fullPath);
//             } else if (path.extname(file.name).toLowerCase() === '.png') {
//                 const webpPath = fullPath.replace(/\.png$/i, '.webp');
//
//                 await sharp(fullPath)
//                     .webp({
//                         lossless: true,  // Lossless conversion
//                         quality: 80,     // Compression level (0-100)
//                         nearLossless: true  // Additional size optimization
//                     })
//                     .toFile(webpPath);
//
//                 console.log(`Converted: ${fullPath} -> ${webpPath}`);
//             }
//         }
//     } catch (error) {
//         console.error('Conversion error:', error);
//     }
// }
//
// const p = 'htdocs/assets/block';
// convertPngToWebp(p);

// -----------------------------------------------------------------------

