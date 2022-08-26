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
      const {data} = await axios.post("http://localhost:3001/api/users/login", body);
      if (!data) return response(true, data);
      localStorage.setItem("aa_tt", JSON.stringify(data.token));
      return response(false, data);
    } catch (error) {
      return response(true, error.message);
    }
  }

  static async getMe(token) {
    try {
      console.log("entre");
      const {data} = await axios.get("http://localhost:3001/api/users/me", {
        headers:{
          Authorization: `${token}`
        }
      });
      if (!data) return response(true, data);
      return response(false, data);
    } catch (error) {
      return response(true, error.message);
    }
  }
  static async logoutRequest(body) {
    try {
      const token = JSON.parse(localStorage.getItem("aa_tt"));
      if(!token) return response(true, "User not logged");
      const {data} = await axios.post("http://localhost:3001/api/users/logout", body, {
        headers:{
          Authorization: `${token}`
        }
      });
      localStorage.removeItem("aa_tt");
      return response(false, data);
    } catch (error) {
      return response(true, error.message);
    }
  }

}
module.exports = User;
