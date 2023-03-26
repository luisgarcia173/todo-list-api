const taskModel = require('../models/taskModel');

const getAll = async (_req, res) => {
  const tasks = await taskModel.getAll();
  if (tasks.length > 0) {
    return res.status(200).json(tasks);
  } else {
    return res.status(404).json({ message: 'Task not found' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const [tasks] = await taskModel.getById(id);
  if (tasks) {
    return res.status(200).json(tasks);
  } else {
    return res.status(404).json({ message: 'Task not found' });
  }
};

const create = async (req, res) => {
  const task = await taskModel.create(req.body);
  return res.status(201).json(task);
};

const deleteById = async (req, res) => {
  await taskModel.deleteById(req.params['id']);
  return res.status(204).json();
};

const updateById = async (req, res) => {
  const { id } = req.params;
  await taskModel.updateById(id, req.body);
  return res.status(204).json();
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
};