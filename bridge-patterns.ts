// Bridge Pattern: separates abstraction from implementation so both can vary independently.
interface Device {
  turnOn(): void;
  turnOff(): void;
  setChannel(channel: number): void;
}

class Television implements Device {
  public turnOn(): void {
    console.log("TV turned on");
  }

  public turnOff(): void {
    console.log("TV turned off");
  }

  public setChannel(channel: number): void {
    console.log(`TV switched to channel ${channel}`);
  }
}

class Radio implements Device {
  public turnOn(): void {
    console.log("Radio turned on");
  }

  public turnOff(): void {
    console.log("Radio turned off");
  }

  public setChannel(channel: number): void {
    console.log(`Radio tuned to channel ${channel}`);
  }
}

abstract class RemoteControl {
  constructor(protected device: Device) { }

  public abstract pressPower(): void;
}

class BasicRemote extends RemoteControl {
  public pressPower(): void {
    this.device.turnOn();
  }
}

// Example usage: the remote control can work with different devices.
const tvRemote = new BasicRemote(new Television());
tvRemote.pressPower();

const radioRemote = new BasicRemote(new Radio());
radioRemote.pressPower();
