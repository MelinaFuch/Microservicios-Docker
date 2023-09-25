const url = "http://database:8004/Character";
const axios = require("axios");

module.exports = {
    list: async () => {
        const { data } = await axios(url);
        return data;
    },
    create: async (film) => {
        const { data } = await axios.post(url, film);
        return data;
    },
    getOne: async (id) => {
        const { data } = await axios(`${url}/${id}`);
        return data;
    },
    edit: async (id, film) => {
        const { data } = await axios.put(`${url}/${id}`, film);
        return data;
    },
    delete: async (id) => {
        const { data } = await axios.delete(`${url}/${id}`);
        return data;
    }
}