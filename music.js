class Scale {
    constructor(rootNote = 'C', scaleQuality = 'major') {
        this.rootNote = rootNote;
        this.scaleQuality = scaleQuality;
        this.basicScaleGride = [
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        ];
        this.fullScaleGride = this.basicScaleGride.forEach((s) => {
            s.push(...s);
        });
    }

    getRootNote() {
        return this.rootNote;
    }

    getScaleQuality() {
        return this.scaleQuality;
    }

    getBasicScaleGride() {
        return this.basicScaleGride;
    }

    getFullScaleGride() {
        return this.fullScaleGride;
    }

    isNoteInScale(posX, posY) {
        const noteValue = this.fullScaleGride[posY][posX];
        if (noteValue === 1) return true;
        return false;
    }

    getScaleNiceName() {
        return `${this.rootNote} ${this.scaleQuality}`;
    }

    printFullScaleGrid() {
        document.write("<pre>");
        this.fullScaleGride.forEach((line) => {
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
    constructor(rootNote, scaleQuality) {
        this.stringTuning = ['E', 'A', 'D', 'G', 'B', 'e'];
        this.scale = new Scale(rootNote, scaleQuality);
        this.scaleGrid = this.scale.getFullScaleGride();
        this.tab = this.returnBlankTab();
    }

    getStringTuning() {
        return this.stringTuning;
    }

    getScale() {
        return this.scale;
    }

    getScaleGrid() {
        return this.scaleGrid;
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
    pickARandomNote(posXLast, posYLast) {
        const possiblesNotes = [];

        // Loop through the scale array and fill possiblesNotes array
        for (let i = 0; i < this.scaleGrid.length; i++) {
            for (let j = 0; j < this.scaleGrid[i].length; j++) {
                if (this.scaleGrid[i][j] === 1 && Math.abs(i - posYLast) <= 2 && Math.abs(j - posXLast) <= 2) {
                    possiblesNotes.push([i, j]);
                }
            }
        }

        // Randomly select a position from the possiblesNotes
        const randomIndex = Math.floor(Math.random() * possiblesNotes.length);
        const randomNotePosition = possiblesNotes[randomIndex];

        return randomNotePosition;
    }

    generateTab() {
        // Generate start notes
        let posY = Math.floor(Math.random() * 6);
        let posX = Math.floor(Math.random() * this.scaleGrid[0].length);

        // Generate tab
        // for the length of a string array of the tab array
        for (let noteIndex = 3; noteIndex < this.tab[0].length; noteIndex += 6) {
            // Generate a new note
            const newNote = this.pickARandomNote(posX, posY);

            // Get the position
            posY = newNote[0];
            posX = newNote[1];

            // Write it
            this.tab[posY][noteIndex] = posX;
        }
    }
}

class Riff extends Music {

}
