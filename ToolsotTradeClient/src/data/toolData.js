import axios from "axios";

const dbURL = "https://localhost:7008/api";

const getTools = () =>
    new Promise((resolve, reject) => {
        axios
            .get(`${dbURL}/Tool`)
            .then((response) => resolve(Object.values(response.data)))
            .catch(reject);
    });

const getToolById = (id) =>
    new Promise((resolve, reject) => {
        axios.get(`${dbURL}/Tool/id/${id}`)
        .then((response) => resolve(response.data))
        .catch(reject);
    });

const getToolByName = () =>
    new Promise((resolve, reject) => {
        axios.get(`${dbURL}/Tool/name/${name}`)
        .then(resolve)
        .catch(reject);
    });

const getToolsByType = () =>
    new Promise((resolve, reject) => {
        axios.get(`${dbURL}/Tool/type/${type}`)
        .then(resolve)
        .catch(reject);
    });

const getToolsByManufacturer = () =>
    new Promise((resolve, reject) => {
        axios.get(`${dbURL}/Tool/manufacturer/${manufacturer}`)
        .then(resolve)
        .catch(reject);
    });

const addNewTool = (toolObj) => new Promise((resolve, reject) => {
    axios
    .post(`${dbURL}/Tool/add`, toolObj)
    .then(resolve)
    .catch(reject);
});

const updateTool = (id, obj) => new Promise((resolve, reject) => {
    axios
    .put(`${dbURL}/Tool/${id}`, obj)
    .then(() => getTools(),then(resolve))
    .catch(reject);
})

const deleteTool = (id) => new Promise((resolve, reject) => {
    axios
    .delete(`${dbURL}/Tool/${id}`)
    .then(() => getTools().then(resolve))
    .catch(reject);
});

export {
    getTools, getToolById, getToolByName, getToolsByType, getToolsByManufacturer, addNewTool, updateTool, deleteTool
};

