"use strict";
class SimpleCoffee {
    getDescription() {
        return "Simple Coffee";
    }
    cost() {
        return 5;
    }
}
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    getDescription() {
        return this.coffee.getDescription();
    }
    cost() {
        return this.coffee.cost();
    }
}
class MilkDecorator extends CoffeeDecorator {
    getDescription() {
        return `${this.coffee.getDescription()} with Milk`;
    }
    cost() {
        return this.coffee.cost() + 2;
    }
}
class SugarDecorator extends CoffeeDecorator {
    getDescription() {
        return `${this.coffee.getDescription()} with Sugar`;
    }
    cost() {
        return this.coffee.cost() + 1;
    }
}
// Example usage: decorators stack on top of the base coffee object.
const coffee = new SugarDecorator(new MilkDecorator(new SimpleCoffee()));
console.log(coffee.getDescription());
console.log(coffee.cost());
