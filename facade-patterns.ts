// Facade Pattern: provides a simple interface to a complex system.
class Amplifier {
  public on(): void {
    console.log("Amplifier on");
  }

  public setVolume(level: number): void {
    console.log(`Volume set to ${level}`);
  }
}

class DvdPlayer {
  public on(): void {
    console.log("DVD player on");
  }

  public play(movie: string): void {
    console.log(`Playing ${movie}`);
  }
}

class Lights {
  public dim(): void {
    console.log("Lights dimmed");
  }
}

class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private dvdPlayer: DvdPlayer,
    private lights: Lights
  ) { }

  public watchMovie(movie: string): void {
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
