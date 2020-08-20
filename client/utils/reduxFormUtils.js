/* eslint-disable */
export const domOnlyProps = ({
  initialValue,
  autofill,
  onUpdate,
  valid,
  invalid,
  dirty,
  pristine,
  active,
  touched,
  visited,
  autofilled,
  error,
  ...domProps }) => domProps;
/* eslint-enable */

// eslint-disable-next-line max-len
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

function validateNameEmail(formProps, errors) {
  if (!formProps.username) {
    errors.username = 'Please enter a username.';
  } else if (!formProps.username.match(/^.{1,20}$/)) {
    errors.username = 'Username must be less than 20 characters.';
  } else if (!formProps.username.match(/^[a-zA-Z0-9._-]{1,20}$/)) {
    errors.username = 'Username must only consist of numbers, letters, periods, dashes, and underscores.';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email.';
  } else if (
    // eslint-disable-next-line max-len
    !formProps.email.match(EMAIL_REGEX)) {
    errors.email = 'Please enter a valid email address.';
  }
}

export function validateSettings(formProps) {
  const errors = {};

  validateNameEmail(formProps, errors);

  if (formProps.currentPassword && !formProps.newPassword) {
    errors.newPassword = 'Please enter a new password or leave the current password empty.';
  }

  return errors;
}

export function validateLogin(formProps) {
  const errors = {};
  /*if (!formProps.email) {
    errors.email = 'Please enter an email';
  }
  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }*/
  return errors;
}

export function validateSignup(formProps) {
  const errors = {};

  validateNameEmail(formProps, errors);

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }
  if (formProps.password) {
    if (formProps.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
  }
  if (!formProps.confirmPassword) {
    errors.confirmPassword = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.confirmPassword && formProps.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  return errors;
}
export function validateResetPassword(formProps) {
  const errors = {};
  if (!formProps.email) {
    errors.email = 'Please enter an email.';
  } else if (
    // eslint-disable-next-line max-len
    !formProps.email.match(EMAIL_REGEX)) {
    errors.email = 'Please enter a valid email address.';
  }
  return errors;
}
