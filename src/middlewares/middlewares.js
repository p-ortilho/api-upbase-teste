const { request, response } = require("express");

const validateParams = (request, response, next) => {
    const {body} = request;

    if (body.nome === undefined || body.nome === ''){
        return response.status(400).json({message:'undefined fields'});
    }
    if (body.usuario === undefined || body.usuario === ''){
        return response.status(400).json({message:'undefined fields'});
    }
    if (body.senha === undefined || body.senha === ''){
        return response.status(400).json({message:'undefined fields'});
    }
    if (body.confirmacao === undefined || body.confirmacao === ''){
        return response.status(400).json({message:'undefined fields'});
    }
    if (body.senha !== body.confirmacao || body.confirmacao !== body.senha){
        return response.status(400).json({message:'password parameters are not valid'});
    }
    
    next();
};

const validUpdate = (request, response, next) => {
    const {body} = request;

    if (body.usuario === undefined || body.usuario === ''){
        return response.status(400).json({message:'undefined fields'});
    }
    if (body.confirmacao === undefined || body.confirmacao === ''){
        return response.status(400).json({message:'undefined fields'});
    }
    if (body.senha !== body.confirmacao || body.confirmacao !== body.senha){
        return response.status(400).json({message:'password parameters are not valid'});
    }

    next();
};

module.exports = {
    validateParams,
    validUpdate
}