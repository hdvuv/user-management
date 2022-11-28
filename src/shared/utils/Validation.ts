/**
 * Regex to validate
 */
export const FORMAT = {
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{1,4}$/,
  PHONE: /^[0-9]{10}$/,
};

/**
 * Check the valid of email data
 *
 * @param input email data
 * @returns true if invalid, otherwise return false
 */
export const isValidEmail = (input: string | undefined) => {
  if (!input) {
    return true;
  }
  if (!input.match(FORMAT.EMAIL)) {
    return false;
  }
  return true;
};

/**
 * Check the valid of phone data
 *
 * @param input phone data
 * @returns true if invalid, otherwise return false
 */
export const isValidPhone = (input: string | undefined) => {
  if (!input) {
    return true;
  }
  if (!input.match(FORMAT.PHONE)) {
    return false;
  }
  return true;
};
