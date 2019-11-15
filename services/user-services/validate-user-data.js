const userDataIsValid = (userData) => {
  try {
    const {
      firstName, lastName, email, password, gender, jobRole, department, address,
    } = userData;

    console.log(userData);

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
    console.log('Caught ', err);
    return false;
  }
};

module.exports = userDataIsValid;
