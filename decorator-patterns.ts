// Decorator Pattern: adds new behavior to an object without changing its class.
interface Coffee {
  getDescription(): string;
  cost(): number;
}

class SimpleCoffee implements Coffee {
  public getDescription(): string {
    return "Simple Coffee";
  }

  public cost(): number {
    return 5;
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) { }

  public getDescription(): string {
    return this.coffee.getDescription();
  }

  public cost(): number {
    return this.coffee.cost();
  }
}

class MilkDecorator extends CoffeeDecorator {
  public getDescription(): string {
    return `${this.coffee.getDescription()} with Milk`;
  }

  public cost(): number {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator extends CoffeeDecorator {
  public getDescription(): string {
    return `${this.coffee.getDescription()} with Sugar`;
  }

  public cost(): number {
    return this.coffee.cost() + 1;
  }
}

// Example usage: decorators stack on top of the base coffee object.
const coffee = new SugarDecorator(new MilkDecorator(new SimpleCoffee()));
console.log(coffee.getDescription());
console.log(coffee.cost());
