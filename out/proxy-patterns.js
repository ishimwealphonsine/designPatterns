"use strict";
class RealImage {
    constructor(filename) {
        this.filename = filename;
        this.loadFromDisk();
    }
    loadFromDisk() {
        console.log(`Loading image from disk: ${this.filename}`);
    }
    display() {
        console.log(`Displaying image: ${this.filename}`);
    }
}
class ProxyImage {
    constructor(filename) {
        this.filename = filename;
        this.realImage = null;
    }
    display() {
        // The real object is created only when it is actually needed.
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}
// Example usage: the proxy delays loading until the image must be shown.
const image = new ProxyImage("photo.jpg");
image.display();
