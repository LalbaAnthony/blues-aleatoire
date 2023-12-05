const scales = {
    pentatonicMinor: [
        [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    ],
};

function getScale(scaleName) {
    return scales[scaleName];
}

function getScalesNames() {
    return Object.keys(scales);
}

function getRandomItem() {
    var scaleName = scales[Math.floor(Math.random() * scales.length)];
    return scales[scaleName];
}

console.log(getRandomItem());