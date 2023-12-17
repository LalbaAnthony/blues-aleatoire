class Scale {
    constructor(rootNote = 'C', mode = 'major') {
        this.rootNote = rootNote;
        this.mode = mode;
        this.stringTune = ['E', 'A', 'D', 'G', 'B', 'E'];
        this.scaleNameToShiftRequirement = {
            'A': 0,
            'A#': 1,
            'B': 2,
            'C': 3,
            'C#': 4,
            'D': 5,
            'D#': 6,
            'E': -5,
            'F': -4,
            'F#': -3,
            'G': -2,
            'G#': -1,
        };
        this.basicAPentatonicMinorScale = [
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        ];
        this.basicAPentatonicMajorScale = [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        ];
        this.fullAPentatonicMinorScale = this.basicAPentatonicMinorScale.map((s) => [...s, ...s.slice(0, -1)]);
        this.fullAPentatonicMajorScale = this.basicAPentatonicMajorScale.map((s) => [...s, ...s.slice(0, -1)]);
        this.computedScale = this.shiftScale(mode === 'major' ? this.fullAPentatonicMajorScale : this.fullAPentatonicMinorScale, this.scaleNameToShiftRequirement[this.rootNote]);
    }

    getRootNote() {
        return this.rootNote;
    }

    getMode() {
        return this.mode;
    }

    getBasicAPentatonicMinorScale() {
        return this.basicAPentatonicMinorScale;
    }

    getFullAPentatonicMinorScale() {
        return this.fullAPentatonicMinorScale;
    }

    getAllFullPentatonicScale() {
        return this.allFullPentatonicScale;
    }

    isNoteInScale(s, posX, posY) {
        const noteValue = s[posY][posX];
        if (noteValue === 1) return true;
        return false;
    }

    getScaleNiceName() {
        return `${this.rootNote} ${this.mode}`;
    }

    shiftScale(originalScale, shift) {
        const newScale = [];
        for (let i = 0; i < originalScale.length; i++) {
            const string = originalScale[i];
            const shiftedString = [];

            for (let j = 0; j < string.length; j++) {
                const newIndex = (j + shift + string.length) % string.length;
                shiftedString[newIndex] = string[j];
            }

            newScale.push(shiftedString);
        }

        return newScale;
    }

    printFullScale() {
        const scaleEl = document.getElementById('scale');
        scaleEl.innerHTML = ''; // Clear the previous scale
        for (let i = 0; i <= 5; i++) {
            const lineEl = document.createElement('div');
            lineEl.textContent = this.stringTune.slice().reverse()[i] + '|' + this.computedScale[i].map(element => (element === 0 ? '--' : 'X')).join(' ')
            scaleEl.appendChild(lineEl);
        }
    }
}

class Music {
    constructor(scale) {
        this.scale = scale;
        this.tab = this.returnBlankTab();
    }

    getScale() {
        return this.scale.computedScale;
    }

    getTab() {
        return this.tab;
    }

    returnBlankTab(length = 150) {
        const tab = [];
        for (let i = 0; i < 6; i++) {
            const oneStringArray = [...Array(length).fill('')];
            tab.push(oneStringArray);
        }
        return tab;
    }

    printTab() {
        const tabEl = document.getElementById('tab');
        tabEl.textContent = '';
        this.tab.forEach((line) => {
            const lineEl = document.createElement('div');
            lineEl.textContent = line.join('');
            tabEl.appendChild(lineEl);
        });
    }

    displayTab() {
        const tabTable = document.getElementById('tab');
        tabTable.innerHTML = '';
        const tabBody = document.createElement('tbody');
        this.tab.forEach((line) => {
            const lineEl = document.createElement('tr');
            line.forEach((note) => {
                const noteEl = document.createElement('td');
                if (note === '') {
                    note = '&nbsp;';
                } else {
                    noteEl.classList.add('note');
                }
                noteEl.innerHTML = note;
                lineEl.appendChild(noteEl);
            });
            tabBody.appendChild(lineEl);
        });
        tabTable.appendChild(tabBody);
    }
}

class Solo extends Music {
    pickANote(posXLast, posYLast, horizontalDepth = 4, verticalDepth = 1) {
        const possiblesNotes = [];

        // Loop through the scale array and fill possiblesNotes array
        for (let i = 0; i < this.scale.computedScale.length; i++) {
            for (let j = 0; j < this.scale.computedScale[i].length; j++) {
                if (this.scale.computedScale[i][j] === 1
                    && Math.abs(j - posXLast) <= horizontalDepth
                    && Math.abs(i - posYLast) <= verticalDepth
                ) {
                    possiblesNotes.push([j, i]);
                }
            }
        }

        // Randomly select a position from the possiblesNotes
        const randomIndex = Math.floor(Math.random() * possiblesNotes.length);
        const randomNotePosition = possiblesNotes[randomIndex];

        return randomNotePosition;
    }

    generateTab() {
        // Generate start note
        let posY = Math.floor(Math.random() * 6);
        let posX = Math.floor(Math.random() * this.scale.computedScale[0].length);

        // for the length of a string array of the tab array
        for (let noteIndex = 3; noteIndex < this.tab[0].length; noteIndex += 6) {
            // Generate a new note
            const newNote = this.pickANote(posX, posY);

            // Get the position
            posX = newNote[0];
            posY = newNote[1];

            // Write it
            this.tab[posY][noteIndex] = posX;
        }
    }
}

class Lead extends Music {

}

class Riff extends Music {

}
