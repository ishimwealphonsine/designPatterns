// Proxy Pattern: controls access to another object, often to add lazy loading or security.
interface Image {
  display(): void;
}

class RealImage implements Image {
  constructor(private filename: string) {
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Loading image from disk: ${this.filename}`);
  }

  public display(): void {
    console.log(`Displaying image: ${this.filename}`);
  }
}

class ProxyImage implements Image {
  private realImage: RealImage | null = null;

  constructor(private filename: string) { }

  public display(): void {
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
