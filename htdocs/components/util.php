<?php


function getRarityForBox($box) {
    if ($box === 6) {
        return 6;
    } else if ($box === 24) {
        return 24;
    } else if ($box === -1) {
        return -1;
    }
    return "default";
}

function getTypeOfRarity($rarity) {
    if ($rarity === -1) {
        return "extra";
    } else if ($rarity === 6) {
        return "nicolas";
    } else if ($rarity === 24) {
        return "christmas";
    }
    return "normal";
}


function matchesSearch($originalString, $searchTerm): bool {
    $originalString = strtolower($originalString);
    $searchTerm = strtolower($searchTerm);

    if (strlen($searchTerm) === 0) {
        return false;
    }

    if (strlen($originalString) === 0) {
        return false;
    }

    $originalIndex = 0;
    $searchIndex = 0;

    while ($originalIndex < strlen($originalString) && $searchIndex < strlen($searchTerm)) {
        if ($originalString[$originalIndex] === $searchTerm[$searchIndex]) {
            $searchIndex++;
        }

        $originalIndex++;
    }

    return $searchIndex === strlen($searchTerm);
}

function getRaritiesForBox($box): array {
    $box = (int)$box;
    $data = [
        "type" => "normal",
        "drops" => [],
    ];

    // drop amount per box
    $drops = getDropRates();

    // first: select the correct drops array
    $rarity = getRarityForBox($box);

    // chance to get an extra box
    if (rand(0, 100) < getExtraBoxProbability()
        && $rarity !== 6 && $box !== 24) {
        $rarity = -1;
    }

    $data["type"] = getTypeOfRarity($rarity);
    $drops = $drops[$rarity];

    for ($i = 0; $i < rand($drops[0], $drops[1]); $i++) {
        $data["drops"][] = rarityForBox($box);
    }

    return $data;

}

require "constants.php";


function rarityForBox($box): int {
    $relation = rand(0, 100);

    $probabilities = getProbabilities();
    $rarities = getRarityRanges();

    $rarity = getRarityForBox($box);

    $probabilities = $probabilities[$rarity];
    $rarities = $rarities[$rarity];

    $rarityPool = [];

    foreach ($probabilities as $index => $probability) {
        // add rarity at index $index $probability times
        for ($i = 0; $i < $probability; $i++) {
            $rarityPool[] = $rarities[$index];
        }
    }

    return $rarityPool[rand(0, count($rarityPool) - 1)];
}


function encodeDrops($type, $drops): string {
    // encode the drops array including the type which is "normal", "nicolas" or "christmas"
    // into a base64 string and return it

    $data = [
        "type" => $type,
        "drops" => $drops
    ];

    return base64_encode(json_encode($data));
}


function getRandomItemForRarity($rarity) {
    $filename = "../data/lvl_" . $rarity . ".json";
    $data = file_get_contents($filename);

    $items = json_decode($data);
    return $items[rand(0, count($items) - 1)];
}
