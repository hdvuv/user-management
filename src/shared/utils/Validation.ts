export const FORMAT = {
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]$/,
  PHONE: /^[0-9]{10}$/,
};

export const isValidEmail = (input: string | undefined) => {
  if (!input) {
    return true;
  }
  if (!input.match(FORMAT.EMAIL)) {
    return false;
  }
  return true;
};

export const isValidPhone = (input: string | undefined) => {
  if (!input) {
    return true;
  }
  if (!input.match(FORMAT.PHONE)) {
    return false;
  }
  return true;
};
