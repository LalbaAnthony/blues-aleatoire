const scales = {
    ApentatonicMinor: [
        [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    ],
};

function getScales() {
    return scales;
}

function getScale(scaleName) {
    return scales[scaleName];
}

function getScalesNames() {
    return Object.keys(scales);
}

function getRandomItem() {
    const scalesNames = getScalesNames();
    const rdmScaleName = scalesNames[Math.floor(Math.random() * scalesNames.length)];
    return scales[rdmScaleName];
}

// console.log(getRandomItem());