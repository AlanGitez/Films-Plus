const axios = require("axios");
const { response } = require("../utils/createResponse");



class User {
  static async loginRequest(body) {
    try {
      const user = await axios.post("/api/user/login", body);
      if (!user) return response(true, "invalid credentials")
      return response(false, user);
    } catch (error) {
      return response(true, error.message)
    }
  }

  static async registerRequest(body) {
    try {
      const user = await axios.post("api/user/register", body);
      if (!user) return response(true, "Cannot create your account");
    } catch (error) {
      return response(true, error.message)
    }
  }
}
module.exports = User;
