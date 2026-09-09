/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */

// const months = {
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 4,
//   5: 5,
//   6: 6,
//   7: 7,
//   8: 8,
//   9: 9,
//   10: 10,
//   11: 11,
//   12: 12,
// };
// export function getSeasonActivity(month, temperature) {
//   //* Validate input
//   if (!months[month]) return null;

//   //? Understand the problem
//   //* A) suggest activities based on season and temprature

//   //? Break it down into sub-problems
//   //* A) check for the right month and temprature
//   //* B) return an object containing season and activity

//   if ((month === 12 || month === 1 || month === 2) && temperature < 0) {
//     return {
//       season: "Winter",
//       activity: "skiing",
//     };
//   } else if ((month === 12 || month === 1 || month === 2) && temperature >= 0) {
//     return {
//       season: "Winter",
//       activity: "ice skating",
//     };
//   } else if ((month === 3 || month === 4 || month === 5) && temperature > 20) {
//     return {
//       season: "Spring",
//       activity: "hiking",
//     };
//   } else if ((month === 3 || month === 4 || month === 5) && temperature <= 20) {
//     return {
//       season: "Spring",
//       activity: "museum visit",
//     };
//   } else if ((month === 6 || month === 7 || month === 8) && temperature > 35) {
//     return {
//       season: "Summer",
//       activity: "swimming",
//     };
//   } else if ((month === 6 || month === 7 || month === 8) && temperature <= 35) {
//     return {
//       season: "Summer",
//       activity: "cycling",
//     };
//   } else if (
//     (month === 9 || month === 10 || month === 11) &&
//     temperature > 15
//   ) {
//     return {
//       season: "Autumn",
//       activity: "nature walk",
//     };
//   } else if (
//     (month === 9 || month === 10 || month === 11) &&
//     temperature <= 15
//   ) {
//     return {
//       season: "Autumn",
//       activity: "reading at a cafe",
//     };
//   }
// }

// console.log(getSeasonActivity(12, -5));

const seasons = {
  Winter: [12, 1, 2],
  Spring: [3, 4, 5],
  Summer: [6, 7, 8],
  Autumn: [9, 10, 11],
};

export function getSeason(month) {
  for (const [season, months] of Object.entries(seasons)) {
    if (months.includes(month)) {
      return season;
    }
  }
}

const activityRules = {
  Winter: {
    threshold: 0,
    comparision: (temperature, threshold) => temperature < threshold,
    ifTrue: "skiing",
    ifFalse: "ice skating",
  },

  Spring: {
    threshold: 20,
    comparision: (temperature, threshold) => temperature > threshold,
    ifTrue: "hiking",
    ifFalse: "museum visit",
  },

  Summer: {
    threshold: 35,
    comparision: (temperature, threshold) => temperature > threshold,
    ifTrue: "swimming",
    ifFalse: "cycling",
  },

  Autumn: {
    threshold: 15,
    comparision: (temperature, threshold) => temperature > threshold,
    ifTrue: "nature walk",
    ifFalse: "reading at a cafe",
  },
};

function getActivity(month, temperature) {
  //* calling getSeason functon to get the season
  const season = getSeason(month);
  if (!season) {
    return;
  }

  //* get the rule for activity
  const rule = activityRules[season];

  //* return true or false based on temprature
  const condition = rule.comparision(temperature, rule.threshold);

  //* extract activity
  const activity = condition ? rule.ifTrue : rule.ifFalse;

  return {
    season,
    activity,
  };
}

export function getSeasonActivity(month, temperature) {
  if (month < 1 || month > 12) {
    return null;
  }

  return getActivity(month, temperature);
}

// console.log(getSeasonActivity(1, 10));
