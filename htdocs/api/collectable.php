<?php

// response:
// code: 404
// message: "Not Found"
// data: null

$response = [
    "code" => 404,
    "message" => "Not Found",
    "data" => null
];

header("Content-Type: application/json; charset=UTF-8");

$data = file_get_contents("../data/collectable.json");
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