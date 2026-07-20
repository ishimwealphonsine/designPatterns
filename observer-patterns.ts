// Observer Pattern: allows objects to react when another object changes state.
interface Observer {
  update(message: string): void;
}

class NewsAgency {
  private observers: Observer[] = [];

  public subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  public notify(message: string): void {
    this.observers.forEach((observer) => observer.update(message));
  }
}

class MobileApp implements Observer {
  public update(message: string): void {
    console.log(`Mobile app received: ${message}`);
  }
}

class Website implements Observer {
  public update(message: string): void {
    console.log(`Website received: ${message}`);
  }
}

// Example usage: subscribers are notified whenever the news agency publishes a new update.
const newsAgency = new NewsAgency();
const app = new MobileApp();
const web = new Website();

newsAgency.subscribe(app);
newsAgency.subscribe(web);
newsAgency.notify("Breaking news: TypeScript patterns are fun!");
