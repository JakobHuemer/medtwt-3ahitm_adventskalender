<?php

// points: 0-100
// rarity: 0-4

// advent calendar
// normal:
// - items: 2-3
// - rarity: 0-3
// - curve: very hard to get 2 and 3
// relation 50-30-15-5

// 6th december nicolas:
// - items: 3-6
// - rarity: 2-4
// - curve: very hard to get 4
// relation: 50-35-15

// 24th december:
// - items: 6-10
// - rarity: 2-4
// - curve: just hard to get 4 like 20/80
// - relation: 20-60-20

require "../components/util.php";

header("Content-Type: application/json; charset=UTF-8");

$response = [
    "code" => 200,
    "message" => "OK",
    "data" => null
];

$boxNumber = $_GET["box"] ?? null;

if ($boxNumber === null ) {
    echo json_encode([
        "code" => 400,
        "message" => "Bad Request: Box number is required",
        "data" => null
    ]);
    return;
}

if ($boxNumber < 1 || $boxNumber > 24) {
    echo json_encode([
        "code" => 400,
        "message" => "Bad Request: Box number must be between 1 and 24",
        "data" => null
    ]);
    return;
}


// chose rarity according to relation

$boxDrops = getRaritiesForBox($boxNumber);

$response["data"] = array_map(fn($x) => getRandomItemForRarity($x), $boxDrops["drops"]);

// pretty print $arr
//echo json_encode($boxDrops["drops"]);
echo json_encode($response);




