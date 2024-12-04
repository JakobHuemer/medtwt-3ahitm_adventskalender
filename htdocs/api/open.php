<?php


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
        "message" => "Bad Request",
        "description" => "Box number is required",
        "data" => null
    ]);
    return;
}

if ($boxNumber < 1 || $boxNumber > 24) {
    echo json_encode([
        "code" => 400,
        "message" => "Bad Request",
        "description" => "Box number must be between 1 and 24",
        "data" => null
    ]);
    return;
}

$today = date("d");

if ($today < $boxNumber) {
    echo json_encode([
        "code" => 403,
        "message" => "Forbidden",
        "description" => "Box number is in the future",
        "data" => null
    ]);
    return;
}


// chose rarity according to relation

$boxDrops = getRarityDropsForBox($boxNumber);
$dropType = $boxDrops["type"];

$response["data"] = [
    "type" => $dropType,
    "drops" => array_map(fn($x) => getRandomItemForRarity($x), $boxDrops["drops"])
];

echo json_encode($response);




