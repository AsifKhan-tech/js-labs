/**
 * 💰 Sam's Tax Calculator
 *
 * Sam is a freelance graphic designer who dreads tax season every year.
 * Help Sam by building a tax calculator that uses progressive tax brackets.
 *
 * How progressive tax works:
 *   You don't pay the same rate on ALL your income. Each "slice" of income
 *   is taxed at its own rate:
 *
 *   Bracket 1: $0 – $10,000        → 0%  (tax-free!)
 *   Bracket 2: $10,001 – $30,000   → 10% (only on the amount ABOVE $10,000)
 *   Bracket 3: $30,001 – $70,000   → 20% (only on the amount ABOVE $30,000)
 *   Bracket 4: Over $70,000        → 30% (only on the amount ABOVE $70,000)
 *
 * Examples:
 *   - Income $8,000   → Tax = $0 (all in bracket 1)
 *   - Income $20,000  → Tax = 10% of ($20,000 - $10,000) = $1,000
 *   - Income $50,000  → Tax = $2,000 + 20% of ($50,000 - $30,000) = $6,000
 *   - Income $100,000 → Tax = $2,000 + $8,000 + 30% of ($100,000 - $70,000) = $19,000
 *
 * Rules:
 *   - If income is 0 or negative, return 0
 *
 * @param {number} income - Annual income in dollars
 * @returns {number} Total tax amount owed
 */
export function calculateTax(income) {
  //? Understanding the problem
  //* A) calculate the tax according to the income

  //! Break it into sub-problems
  //* A) check income bracket
  //* B) calculate tax

  if (income === 0 || income < 0) return -1;

  let tax;

  if (income > 0 && income <= 10_000) {
    tax = (income * 0) / 100;
  } else if (income >= 10_001 && income <= 30_000) {
    tax = (income * 10) / 100;
  } else if (income >= 30_001 && income <= 70_000) {
    tax = (income * 20) / 100;
  } else {
    tax = (income * 30) / 100;
  }

  return tax;
}

// console.log(calculateTax(20_000));
