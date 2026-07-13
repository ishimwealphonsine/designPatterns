"use strict";
// Facade Pattern: provides a simple interface to a complex system.
class Amplifier {
    on() {
        console.log("Amplifier on");
    }
    setVolume(level) {
        console.log(`Volume set to ${level}`);
    }
}
class DvdPlayer {
    on() {
        console.log("DVD player on");
    }
    play(movie) {
        console.log(`Playing ${movie}`);
    }
}
class Lights {
    dim() {
        console.log("Lights dimmed");
    }
}
class HomeTheaterFacade {
    constructor(amplifier, dvdPlayer, lights) {
        this.amplifier = amplifier;
        this.dvdPlayer = dvdPlayer;
        this.lights = lights;
    }
    watchMovie(movie) {
        this.lights.dim();
        this.amplifier.on();
        this.amplifier.setVolume(10);
        this.dvdPlayer.on();
        this.dvdPlayer.play(movie);
    }
}
// Example usage: the facade hides the complexity of the home theater setup.
const theater = new HomeTheaterFacade(new Amplifier(), new DvdPlayer(), new Lights());
theater.watchMovie("Design Patterns");
