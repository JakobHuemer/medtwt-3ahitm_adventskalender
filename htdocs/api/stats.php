<?php

// this file provides clients with the actual rates at which the boxes are generated

require "../components/util.php";

header("Content-Type: application/json; charset=UTF-8");

$response = [
    "code" => 200,
    "message" => "OK",
    "data" => [
        "rarities" => getRarityRanges(),
        "probabilities" => getWeights(),
        "dropRates" => getDropRates(),
        "extraBoxProbability" => getExtraBoxProbability()
    ]
];

echo json_encode($response);