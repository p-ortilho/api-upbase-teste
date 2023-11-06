const {request, response} = require('express');
const registrations = require('../models/registrations');

const getAll = async (_request, response) => {
    const register = await registrations.getAll();
    return response.status(200).json(register);
};

const registerUser = async (request, response) => {
    const registUser = await registrations.registerUser(request.body);

    return response.status(201).json(registUser);
};

const deleteUser = async (request, response) => {
    const {id} = request.params;

    await registrations.deleteUser(id);

    return response.status(204).json();
};

const updateUser = async (request, response) => {
    const {id} = request.params;
    
    await registrations.updateUser(id, request.body);

    return response.status(204).json();
};

module.exports = {
    getAll,
    registerUser,
    deleteUser,
    updateUser
};