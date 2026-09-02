/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
// export function calculateTip(billAmount, serviceRating) {
//   //? Understanding the problem:
//   //* A) Calculate tip based on service rating
//   //* B) return an object with tipPercentage, tipAmount, and totalAmount

//   //! Break down the problem into sub-problems:
//   //* A) check if billAmount is 0 or negative, return null
//   if (billAmount <= 0) return null;
//   //* B) check if serviceRating is not an integer from 1 to 5, return null
//   if (
//     typeof serviceRating !== "number" ||
//     serviceRating < 1 ||
//     serviceRating > 5 ||
//     serviceRating % 1 !== 0
//   )
//     return null;
//   //* C) calculate tip based on service rating
//   let tipPercentage;
//   let tipAmount;
//   let totalAmount;
//   if (serviceRating === 1) {
//     tipPercentage = 5;
//     tipAmount = Number(((billAmount * tipPercentage) / 100).toFixed(2));
//     totalAmount = Number((billAmount + tipAmount).toFixed(2));
//     return {
//       tipPercentage,
//       tipAmount,
//       totalAmount,
//     };
//   } else if (serviceRating === 2) {
//     tipPercentage = 10;
//     tipAmount = Number(((billAmount * tipPercentage) / 100).toFixed(2));
//     totalAmount = Number((billAmount + tipAmount).toFixed(2));

//     return {
//       tipPercentage,
//       tipAmount,
//       totalAmount,
//     };
//   } else if (serviceRating === 3) {
//     tipPercentage = 15;
//     tipAmount = Number(((billAmount * tipPercentage) / 100).toFixed(2));
//     totalAmount = Number((billAmount + tipAmount).toFixed(2));

//     return {
//       tipPercentage,
//       tipAmount,
//       totalAmount,
//     };
//   } else if (serviceRating === 4) {
//     tipPercentage = 20;
//     tipAmount = Number(((billAmount * tipPercentage) / 100).toFixed(2));
//     totalAmount = Number((billAmount + tipAmount).toFixed(2));

//     return {
//       tipPercentage,
//       tipAmount,
//       totalAmount,
//     };
//   } else if (serviceRating === 5) {
//     tipPercentage = 25;
//     tipAmount = Number(((billAmount * tipPercentage) / 100).toFixed(2));
//     totalAmount = Number((billAmount + tipAmount).toFixed(2));

//     return {
//       tipPercentage,
//       tipAmount,
//       totalAmount,
//     };
//   }
// }

// console.log(calculateTip(50, 4));

//* map service ratings to tip percentages
//* when the function is called, not everytime this object is created by JavaScript. So define it outside the function
const TIP_PERCENTAGES = {
  1: 5,
  2: 10,
  3: 15,
  4: 20,
  5: 25,
};
export function calculateTip(billAmount, serviceRating) {
  //* validation against invalid inputs
  if (typeof billAmount !== "number" || billAmount <= 0) return null;

  //* validation against invalid service ratings
  if (
    typeof serviceRating !== "number" ||
    !Number.isInteger(serviceRating) ||
    serviceRating < 1 ||
    serviceRating > 5
  )
    return null;

  //* get the tip percentage based on service rating
  const tipPercentage = TIP_PERCENTAGES[serviceRating];

  //* calculate tipAmount and round it to 2 decimal places
  const tipAmount = Number(((billAmount * tipPercentage) / 100).toFixed(2));

  //* calculate total billAmount and round it to 2 decimal places
  const totalAmount = Number((billAmount + tipAmount).toFixed(2));

  //* return the result as an object
  return {
    tipPercentage,
    tipAmount,
    totalAmount,
  };
}

console.log(calculateTip(50, 4));
