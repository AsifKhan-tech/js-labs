/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  //* Understanding the problem
  //? A) calculate the total price of a coffee order
  //? B) On the basis of size, type, and extras

  //* break it into sub-problems
  //? check for invalid inputs
  //? get base price, check for base price
  //? get add-on price check for type of coffee order
  //? get extra price for (optional-extras)

  if (size !== "small" && size !== "medium" && size !== "large") return -1;
  if (
    type !== "regular" &&
    type !== "latte" &&
    type !== "cappuccino" &&
    type !== "mocha"
  )
    return -1;

  let price;
  //* calculate price on size basis
  if (size === "small") {
    price = 3;
  } else if (size === "medium") {
    price = 4;
  } else if (size === "large") {
    price = 5;
  }

  //* calculate price on type basis
  if (type === "regular") {
    price += 0;
  } else if (type === "latte") {
    price += 1;
  } else if (type === "cappuccino") {
    price += 1.5;
  } else if (type === "mocha") {
    price += 2;
  }

  //* get extra price
  if (extras.whippedCream) {
    price += 0.5;
  }
  if (extras.extraShot) {
    price += 0.75;
  }

  return Number(price.toFixed(2));
}
