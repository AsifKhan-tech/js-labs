/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */

/*
const vechiles = {
  car: "car",
  motorcycle: "motorcycle",
  bus: "bus",
};

export function calculateParkingFee(hours, vehicleType) {
  if (hours <= 0) return -1;
  if (!vechiles[vehicleType]) return -1;

  //? Understand the problem
  //* A) calculate parking fees based on the vechicle type and hours
  //* B) daily maximum charges for each vechile, limit cann't exceed it
  //* C) partial hours are rounded up (1.75 hours -> 2 hours)

  //? Break it down into sub-problems
  //* A) round up the hours to the nearest whole number
  //* B) calculate the parking fees based on hours and vechile type, additional each hour's fees is different and will add with first hour of parking till the parked time
  //* C) if hours > 1, it's needed first hour's fixed parking fee and then (extra fees * remaining hours)
  //* D) calculated parking fess will check with daily maximum fess charged capped at 30
  //* E) return the parking

  hours = Math.ceil(hours);
  let parkingFees = 0;
  let maxParkingFess = 0;

  if (vehicleType === vechiles.car) {
    parkingFees = 5 + (hours - 1) * 3;
    maxParkingFess = 30;
  } else if (vehicleType === vechiles.motorcycle) {
    parkingFees = 3 + (hours - 1) * 2;
    maxParkingFess = 18;
  } else if (vehicleType === vechiles.bus) {
    parkingFees = 10 + (hours - 1) * 7;
    maxParkingFess = 60;
  }

  if (parkingFees > maxParkingFess) parkingFees = maxParkingFess;

  return parkingFees;
}
console.log(calculateParkingFee(3, "motorcycle"));


*/
/**
 * Only single value can be returned from a function. If there is need to return multiple values from the function, return an object or an array.
 */

/**
 * clean code
 * cover DRY principle
 */

const vechiles = {
  car: "car",
  motorcycle: "motorcycle",
  bus: "bus",
};

const rates = {
  car: { first: 5, extra: 3, max: 30 },
  motorcycle: { first: 3, extra: 2, max: 18 },
  bus: { first: 10, extra: 7, max: 60 },
};
export function calculateParkingFee(hours, vehicleType) {
  if (hours <= 0) return -1;
  if (!vechiles[vehicleType]) return -1;

  hours = Math.ceil(hours);
  let parkingFees =
    rates[vehicleType].first + (hours - 1) * rates[vehicleType].extra;

  let maxParkingFess = rates[vehicleType].max;

  if (parkingFees > maxParkingFess) parkingFees = maxParkingFess;

  return parkingFees;
}
