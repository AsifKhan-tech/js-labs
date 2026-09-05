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
  hours = Math.ceil(hours);

  //* B) calculate the parking fees based on hours and vechile type, additional each hour's fees is different and will add with first hour of parking till the parked time
  let parkingFees = 0;
  let maxParkingFess = 30;
  if (hours <= 1 && vehicleType === vechiles.car) return (parkingFees = 5);
  if (hours <= 1 && vehicleType === vechiles.motorcycle)
    return (parkingFees = 3);
  if (hours <= 1 && vehicleType === vechiles.bus) return (parkingFees = 10);

  if (hours > 1 && vehicleType === vechiles.car) return (parkingFees += 3);
  if (hours > 1 && vehicleType === vechiles.motorcycle)
    return (parkingFees += 2);
  if (hours > 1 && vehicleType === vechiles.car) return (parkingFees += 7);

  //* C) calculated parking fess will check with daily maximum fess charged capped at 30
  if (parkingFees > maxParkingFess) parkingFees = 30;

  //* D) return the parking
  return parkingFees;
}
console.log(calculateParkingFee(3, "motorcycle"));

/**
 * Only single value can be returned from a function. If there is need to return multiple values from the function, return an object or an array.
 */
