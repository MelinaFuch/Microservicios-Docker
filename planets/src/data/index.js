const url = "http://database:8004/Planet";
const axios = require("axios");

module.exports = {
    list: async () => {
        const { data } = await axios(url);
        return data;
    },
    create: async (planet) => {
        const { data } = await axios.post(url, planet);
        return data;
    },
    getOne: async (id) => {
        const { data } = await axios(`${url}/${id}`);
        return data;
    },
    edit: async (id, planet) => {
        const { data } = await axios.put(`${url}/${id}`, planet);
        return data;
    },
    delete: async (id) => {
        const { data } = await axios.delete(`${url}/${id}`);
        return data;
    }
}