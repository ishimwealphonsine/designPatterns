"use strict";
// Strategy Pattern: lets an object change its behavior at runtime
// without changing its main logic. This is useful when you want to swap
// algorithms or behaviors dynamically.
// A concrete strategy for paying with a credit card.
class CreditCardStrategy {
    pay(amount) {
        // This method represents one possible behavior of the cart.
        return `Paid ${amount} using Credit Card`;
    }
}
// A concrete strategy for paying with PayPal.
class PayPalStrategy {
    pay(amount) {
        // This method represents a different implementation of the same action.
        return `Paid ${amount} using PayPal`;
    }
}
// The context class uses a strategy object to perform an action.
// The shopping cart does not care which payment method is being used.
class ShoppingCart {
    constructor(strategy) {
        // The cart starts with a default payment strategy.
        this.strategy = strategy;
    }
    // This method allows the behavior to be changed at runtime.
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    // The checkout process delegates to the selected strategy.
    checkout(amount) {
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
