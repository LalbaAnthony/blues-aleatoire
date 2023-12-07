class Scale {
    constructor(rootNote = 'C', mode = 'major') {
        this.rootNote = rootNote;
        this.mode = mode;
        this.basicAPentatonicScale = [
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        ];
        this.fullAPentatonicScale = this.basicAPentatonicScale.map((s) => [...s, ...s.slice(0, -1)]); // concat scale twice + remove last note cuz strat at fret 0
        this.scale = [
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        ]
        // this.scale = this.calculateScale();
    }

    getRootNote() {
        return this.rootNote;
    }

    getMode() {
        return this.mode;
    }

    getBasicAPentatonicScale() {
        return this.basicAPentatonicScale;
    }

    getFullAPentatonicScale() {
        return this.fullAPentatonicScale;
    }

    getAllFullPentatonicScale() {
        return this.allFullPentatonicScale;
    }

    isNoteInScale(scale, posX, posY) {
        const noteValue = scale[posY][posX];
        if (noteValue === 1) return true;
        return false;
    }

    getScaleNiceName() {
        return `${this.rootNote} ${this.mode}`;
    }

    printFullScale() {
        document.write("<pre>");
        document.write('0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2<br>');
        this.fullAPentatonicScale.forEach((line) => {
            line.forEach((note) => {
                if (note === 1) {
                    document.write('X ');
                } else {
                    document.write('- ');
                }
            });
            document.write("<br>");
        });
        document.write("</pre>");
    }
}

class Music {
    constructor(scaleObj) {
        this.stringTuning = ['E', 'A', 'D', 'G', 'B', 'e'];
        this.scale = scaleObj.scale;
        this.tab = this.returnBlankTab();
    }

    getStringTuning() {
        return this.stringTuning;
    }

    getScale() {
        return this.scale;
    }

    getTab() {
        return this.tab;
    }

    returnBlankTab(length = 150) {
        const tab = [];
        for (let i = 0; i < this.stringTuning.length; i++) {
            const oneStringArray = [this.stringTuning.slice().reverse()[i], '|', ...Array(length).fill('-')];
            tab.push(oneStringArray);
        }
        return tab;
    }

    printTab() {
        document.write("<pre>");
        this.tab.forEach((line) => {
            line.forEach((note) => {
                document.write(note);
            });
            document.write("<br>");
        });
        document.write("</pre>");
    }
}

class Solo extends Music {
    pickANote(posXLast, posYLast, depth = 2) {
        const possiblesNotes = [];

        // Loop through the scale array and fill possiblesNotes array
        for (let i = 0; i < this.scale.length; i++) {
            for (let j = 0; j < this.scale[i].length; j++) {
                if (this.scale[i][j] === 1 && Math.abs(i - posYLast) <= depth && Math.abs(j - posXLast) <= depth) {
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
        let posX = Math.floor(Math.random() * this.scale[0].length);

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

class Riff extends Music {

}
