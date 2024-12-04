<?php

function getProbabilities(): array {
    return [
        "default" => [8, 7, 3, 2],
        -1 => [3, 3, 3, 2],
        6 => [10, 7, 3],
        24 => [2, 12, 6],
    ];
}

function getExtraBoxProbability(): int {
    return 60;
}

function getRarityRanges(): array {
    return [
        "default" => [0, 1, 2, 3],
        -1 => [1, 2, 3, 4],
        6 => [2, 3, 4],
        24 => [2, 3, 4],
    ];
}

function getDropRates(): array {
    return [
        "default" => [2, 3],
        -1 => [3, 4],
        6 => [3, 6],
        24 => [6, 10],
    ];
}

function getRendersLocation() {
    return "assets/renders/";
}
