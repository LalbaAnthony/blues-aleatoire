class Music {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Riff extends Music {

}
class Solo extends Music {

}
