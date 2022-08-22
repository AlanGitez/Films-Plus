const axios = require("axios");
const { response } = require("../utils/createResponse");



class User {

  static async registerRequest(body) {
    try {
      const user = await axios.post("http://localhost:3001/api/users/register", body);
      if (!user) return response(true, "Cannot create your account");
      return response(false, "Account created succesfully")
    } catch (error) {
      return response(true, error.message);
    }
  }

  static async loginRequest(body) {
    try {
      const user = await axios.post("http://localhost:3001/api/users/login", body);
      if (!user) return response(true, "invalid credentials");
      return response(false, user);
    } catch (error) {
      return response(true, error.message);
    }
  }

}
module.exports = User;
