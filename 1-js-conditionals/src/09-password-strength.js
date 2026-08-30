/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  //? Understanding the problem
  //* A) check password strength based on criteria

  //! Break it into sub-problems
  //? We should have a variable to count the criteria

  //* A) check password length
  //* B) check capital letters
  //* C) check for small letters
  //* D) check for numbers (0-9)
  //* E) check for special characters

  if (password === "" || typeof password !== "string") return "weak";

  let count = 0;
  if (password.length >= 8) count++;

  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (const letter of upperCaseLetters) {
    if (password.includes(letter)) {
      count++;
      break;
    }
  }

  const lowerCaseLetters = "abcdefghijklmopqrstuvwxyz";
  for (const letter of lowerCaseLetters) {
    if (password.includes(letter)) {
      count++;
      break;
    }
  }

  const numbers = "0123456789";
  for (const number of numbers) {
    if (password.includes(number)) {
      count++;
      break;
    }
  }

  const specialChracters = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  for (const character of specialChracters) {
    if (password.includes(character)) {
      count++;
      break;
    }
  }

  if (count <= 1) {
    return "weak";
  } else if (count <= 3) {
    return "medium";
  } else if (count === 4) {
    return "strong";
  } else {
    return "very strong";
  }
}

console.log(checkPasswordStrength("#I.dev-1"));
