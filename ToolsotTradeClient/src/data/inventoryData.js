import axios from "axios";

const dbURL = "https://localhost:7008/api";

const getInventory = () =>
    new Promise((resolve, reject) => {
        axios
            .get(`${dbURL}/Inventory`)
            .then((response) => resolve(Object.values(response.data)))
            .catch(reject);
    });

const updateToolLocation = (obj, id) => new Promise((resolve, reject) => {
        axios
        .put(`${dbURL}/Inventory/${id}`, obj)
        .then(() => getInventory().then(resolve))
        .catch(reject);
    });

const deleteInventory = (id) => new Promise((resolve, reject) => {
        axios
        .delete(`${dbURL}/Tool/${id}`)
        .then(() => getInventory().then(resolve))
        .catch(reject);
    });

export { getInventory, updateToolLocation, deleteInventory };