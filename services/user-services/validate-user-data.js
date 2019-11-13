const userDataIsValid = (userData) => {
  const {
    firstName, lastName, email, password, gender, jobRole, department, address,
  } = userData;

  if (
    firstName.length > 1
    && lastName.length > 1
    && email.length > 5 && email.contains('@') && email.contains('.')
    && password.length > 6
    && (!gender || gender === 'Male' || gender === 'Female')
    && jobRole
    && department
    && address
  ) return true;

  return false;
};

module.exports = userDataIsValid;
