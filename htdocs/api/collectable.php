<?php

$response = [
    "code" => 404,
    "message" => "Not Found",
    "data" => null
];

header("Content-Type: application/json; charset=UTF-8");

$filename = "../data/collectable.json";


if (($rarity = $_GET["rarity"] ?? null) !== null) {
    if ((int)$rarity > 4 || (int)$rarity < 0) {
        $response = [
            "code" => 400,
            "message" => "Bad Request",
            "description" => "Rarity must be between 0 and 4",
            "data" => null
        ];
        echo json_encode($response);
        return;
    } else {
        $filename = "../data/lvl_" . $rarity . ".json";
    }
}

$data = file_get_contents($filename);
$collectablesArray = json_decode($data);

if (($searchTerm = $_GET["search"] ?? null) !== null) {
    require "../components/util.php";
    $collectablesArray = array_filter($collectablesArray,
        fn($x) => matchesSearch($x->displayName, $searchTerm));

    if (($results = $_GET["results"] ?? null) !== null) {
        $collectablesArray = array_slice($collectablesArray, 0, $results);
    }
}

if (($id = $_GET['ids'] ?? null) !== null) {
    $idsArray = explode(",", $id);
    $collectables = [];

    foreach ($idsArray as $id) {
        foreach ($collectablesArray as $collectable) {
            if ($collectable->id == $id) {
                $collectables[] = $collectable;
            }
        }
    }

    $collectablesArray = $collectables;
}

if (count($collectablesArray) === 0) {
    echo json_encode($response);
    return;
}

$response = [
    "code" => 200,
    "message" => "OK",
    "data" => $collectablesArray
];
echo json_encode($response);