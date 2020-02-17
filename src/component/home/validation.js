/* eslint-disable no-useless-escape */
const passwordValidation = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
  return re.test(password);
};

const emailValidation = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const stringValidation = (string) => (string ? /^([a-zA-Z0-9]{2,})$/.test(String(string)) : false);

const integerValidation = (number) => /^([0-9]{1,})$/.test(number);

const signupValidate = ({
  firstName, lastName, password, rePassword, email,
}) => ({
  firstName: stringValidation(firstName),
  lastName: stringValidation(lastName),
  email: emailValidation(email),
  password: passwordValidation(password),
  rePassword: !!((passwordValidation(rePassword) && (password === rePassword))),
});

const loginValidation = ({ email, password }) => !!((/^([a-zA-Z0-9!@#\$%\^&\*\.]{2,})$/.test(String(password))
  && /^([a-zA-Z0-9!@#\$%\^&\*\.]{2,})$/.test(String(email))));


export {
  signupValidate,
  integerValidation,
  stringValidation,
  emailValidation,
  passwordValidation,
  loginValidation,
};
