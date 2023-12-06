function isNoteInScale(posX, posY) {
    const noteValue = scale[posY][posX];
    if (noteValue === 1) return true;
    return false;
}