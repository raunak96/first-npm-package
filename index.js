/**
 *  See if String is equal to password (case insensitive)
 *  @param  {String}    input   string to check
 *  @return {Boolean}           True if string is Password
 */
const isPassword = input => input.toLowerCase() === "password";

module.exports = isPassword;
