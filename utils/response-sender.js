/** Register response helper methods on the express res object.
 * @function res.sendData (code, data)=> Send JSON data to client on successful request handling.
 * @function res.sendError (code, message)=> Send JSON error message to client on request failure.
 */
const responseSender = (req, res, next) => {
  /** Send error message to the client as JSON upon request failure.
 * @param {number} code The HTTP error code. Must be a valid error code.
 * @param {any} message A message for the client explaining what went wrong.
 */
  res.sendError = (code, message) => {
    const response = {
      status: 'error',
      error: message,
    };
    //
    console.log(response);
    res.status(code).json(response);
  };

  /** Send JSON data to the client upon successful request handling.
 * @param {number} code The HTTP error code. Must be a valid success code (in the 2xx range).
 * @param {any} data An object or array containing the data to be returned to the client.
 */
  res.sendData = (code, data) => {
    const response = {
      status: 'success',
      data,
    };
    //
    res.status(code).json(response);
  };

  next();
};

module.exports = responseSender;
