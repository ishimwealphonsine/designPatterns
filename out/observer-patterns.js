"use strict";
class NewsAgency {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter((item) => item !== observer);
    }
    notify(message) {
        this.observers.forEach((observer) => observer.update(message));
    }
}
class MobileApp {
    update(message) {
        console.log(`Mobile app received: ${message}`);
    }
}
class Website {
    update(message) {
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
