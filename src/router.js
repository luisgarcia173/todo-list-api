const express = require('express');
const taskController = require('./controllers/taskController');
const taskMiddleware = require('./middlewares/taskMiddleware');

const router = express.Router();

router.get('/tasks', taskController.getAll);
router.get('/tasks/:id', taskController.getById);
router.post('/tasks', taskMiddleware.validateTitle, taskController.create);
router.delete('/tasks/:id', taskController.deleteById);
router.put('/tasks/:id', taskMiddleware.validateTitle, taskMiddleware.validateStatus, taskController.updateById);

module.exports = router;