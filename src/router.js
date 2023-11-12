const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');
const middleware = require('./middlewares/middlewares');


router.get('/registrations', controller.getAll);
router.post('/registrations', middleware.validateParams ,controller.registerUser);
router.delete('/registrations/:id', controller.deleteUser);
router.put('/registrations/:id', middleware.validUpdate, controller.updateUser);

module.exports = router;