const scales = {
    //   0  1  2  3  4  5  6  7  8  9  10 11 12
    GMinorPentatonic: [
        [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    ],
    AMinorPentatonic: [
        [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    ],
    BMinorPentatonic: [
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    ],
};

function getScale(rootTone = 'A', scaleQuality = 'minor', scale = 'pentatonic') {
    rootTone = rootTone.toUpperCase().trim();
    scaleQuality = (scaleQuality.charAt(0).toUpperCase() + scaleQuality.slice(1)).trim();
    scale = (scale.charAt(0).toUpperCase() + scale.slice(1)).trim();
    const fullScaleName = `${rootTone}${scaleQuality}${scale}`;
    return scales[fullScaleName];
}

function getScales() {
    return scales;
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