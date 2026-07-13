// Strategy Pattern: lets an object change its behavior at runtime
// without changing its main logic. This is useful when you want to swap
// algorithms or behaviors dynamically.

// The interface defines the common behavior that every payment method must support.
interface PaymentStrategy {
  pay(amount: number): string;
}

// A concrete strategy for paying with a credit card.
class CreditCardStrategy implements PaymentStrategy {
  public pay(amount: number): string {
    // This method represents one possible behavior of the cart.
    return `Paid ${amount} using Credit Card`;
  }
}

// A concrete strategy for paying with PayPal.
class PayPalStrategy implements PaymentStrategy {
  public pay(amount: number): string {
    // This method represents a different implementation of the same action.
    return `Paid ${amount} using PayPal`;
  }
}

// The context class uses a strategy object to perform an action.
// The shopping cart does not care which payment method is being used.
class ShoppingCart {
  // The current strategy is stored here and can be changed later.
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    // The cart starts with a default payment strategy.
    this.strategy = strategy;
  }

  // This method allows the behavior to be changed at runtime.
  public setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  // The checkout process delegates to the selected strategy.
  public checkout(amount: number): string {
    return this.strategy.pay(amount);
  }
}

// Example usage:
// 1. Create a shopping cart with a credit card strategy.
// 2. Pay using the current strategy.
// 3. Switch the strategy to PayPal and pay again.
const cart = new ShoppingCart(new CreditCardStrategy());
console.log(cart.checkout(100));

cart.setStrategy(new PayPalStrategy());
console.log(cart.checkout(50));
