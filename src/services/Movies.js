const { response } = require("../utils/createResponse");
const axios = require("axios");

class Movies {
    static async popular(){
        try {
            const {data} = await axios.get("http://localhost:3001/api/movies");
            if(!data.page) return response(true, data);
            return response(false, data);

        } catch (error) {
            return response(true, `Front Movies-Services ERROR: ${error.message}`);
            
        }
    }

    static async getGenres(){
        try {
            const {data} = await axios.get("http://localhost:3001/api/getGenres");
            if(!data) return response(true, data);
            return response(false, data);

        } catch (error) {
            return response(true, `Front Movies-Services ERROR: ${error.message}`);
            
        }
    }

    static async getByGenre(category){
        try {
            const {data} = await axios.get(`http://localhost:3001/api/movies/collection/${category}`);
            if(!data) return response(true, data);
            return response(false, data);

        } catch (error) {
            return response(true, `Front Movies-Services ERROR: ${error.message}`);
            
        }
    }
}

module.exports = Movies;