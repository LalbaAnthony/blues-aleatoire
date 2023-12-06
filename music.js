// Définition de la classe Personne
class Music {
    constructor(rootNote, scaleQuality) {
        this.scale = new Scale(rootNote, scaleQuality);
    }

    presenter() {
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }

    souhaiterAnniversaire() {
        console.log(`Joyeux anniversaire, ${this.nom} !`);
    }
}

class Scale {
    constructor(rootNote, scaleQuality) {
        this.rootNote = rootNote;
        this.scaleQuality = scaleQuality;
    }

    getScale() {
        return scales[`${this.rootNote}${this.scaleQuality}`];
    }

    getScaleName() {
        return `${this.rootNote}${this.scaleQuality}`;
    }
}







class Riff extends Music {

}
class Solo extends Music {

}
