"use strict";
class Television {
    turnOn() {
        console.log("TV turned on");
    }
    turnOff() {
        console.log("TV turned off");
    }
    setChannel(channel) {
        console.log(`TV switched to channel ${channel}`);
    }
}
class Radio {
    turnOn() {
        console.log("Radio turned on");
    }
    turnOff() {
        console.log("Radio turned off");
    }
    setChannel(channel) {
        console.log(`Radio tuned to channel ${channel}`);
    }
}
class RemoteControl {
    constructor(device) {
        this.device = device;
    }
}
class BasicRemote extends RemoteControl {
    pressPower() {
        this.device.turnOn();
    }
}
// Example usage: the remote control can work with different devices.
const tvRemote = new BasicRemote(new Television());
tvRemote.pressPower();
const radioRemote = new BasicRemote(new Radio());
radioRemote.pressPower();
