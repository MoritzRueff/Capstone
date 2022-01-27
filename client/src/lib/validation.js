const hasUserNameMinLength = (name, stringLength) => name.length > stringLength;

const isValidEmail = (email) => email.includes("@") && isValidDomain(email);
const isValidDomain = (email) => email.split("@")[1].includes(".");

const isUserValid = (user) =>
  hasUserNameMinLength(user.name, 3) && isValidEmail(user.email);

export default isUserValid;
