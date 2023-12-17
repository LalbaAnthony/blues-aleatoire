function restoreInputsFromLocal() {
    const rootNote = localStorage.getItem('rootNote') || 'C';
    document.getElementById('rootNote').value = rootNote;

    const mode = localStorage.getItem('mode') || 'major';
    document.getElementById('mode').value = mode;

    const whatGenerate = localStorage.getItem('whatGenerate') || 'solo';
    document.getElementById('whatGenerate').value = whatGenerate;
}

function saveInputsToLocal() {
    const rootNote = document.getElementById('rootNote').value;
    localStorage.setItem('rootNote', rootNote);
    const mode = document.getElementById('mode').value;
    localStorage.setItem('mode', mode);
    const whatGenerate = document.getElementById('whatGenerate').value;
    localStorage.setItem('whatGenerate', whatGenerate);
}

function clearLocal() {
    localStorage.removeItem('rootNote');
    localStorage.removeItem('mode');
    localStorage.removeItem('whatGenerate');
}