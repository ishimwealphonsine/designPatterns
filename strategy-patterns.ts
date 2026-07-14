// Strategy Pattern: lets an object change its behavior at runtime.
export interface PaymentStrategy {
  pay(amount: number): string;
}

export class CreditCardStrategy implements PaymentStrategy {
  public pay(amount: number): string {
    return `Paid ${amount} using Credit Card`;
  }
}

export class PayPalStrategy implements PaymentStrategy {
  public pay(amount: number): string {
    return `Paid ${amount} using PayPal`;
  }
}

export class ShoppingCart {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  public checkout(amount: number): string {
    return this.strategy.pay(amount);
  }
}

// Example usage: the cart can switch payment methods without changing its interface.
export const cart = new ShoppingCart(new CreditCardStrategy());
console.log(cart.checkout(100));

cart.setStrategy(new PayPalStrategy());
console.log(cart.checkout(50));
