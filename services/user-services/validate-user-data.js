const userDataIsValid = (userData) => {
  try {
    const {
      firstName, lastName, email, password, gender, jobRole, department, address,
    } = userData;

    if (
      firstName.length > 1
      && lastName.length > 1
      && email.length > 5 && email.includes('@') && email.includes('.')
      && password.length > 5
      && (!gender || gender === 'Male' || gender === 'Female')
      && jobRole
      && department
      && address
    ) return true;

    return false;
  } catch (err) {
    // console.log('\tCaught ', err.message, 'in userDataIsValid(userData).');
    return false;
  }
};

module.exports = userDataIsValid;
