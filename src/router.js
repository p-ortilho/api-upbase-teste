const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');
const middleware = require('./middlewares/middlewares');

router.get('/registrations', controller.getAll);
router.post('/registration', middleware.validateParams ,controller.registerUser);
router.delete('/registration/:id', controller.deleteUser);
router.put('/registration/:id', middleware.validUpdate, controller.updateUser)


module.exports = router;
