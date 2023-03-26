const connection = require('./connection');

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM task');
  return tasks;
};

const getById = async (id) => {
  const [tasks] = await connection.execute('SELECT * FROM task WHERE id = ?', [id]);
  return tasks;
};

const create = async (task) => {
  const { title } = task;
  const query = 'INSERT INTO task(title, status) VALUES(?, ?)';
  const [createdTask] = await connection.execute(query, [title, 'pendente']);
  return {insertId: createdTask.insertId};
};

const deleteById = async (id) => {
  const [deletedTask] = await connection.execute('DELETE FROM task WHERE id = ?', [id]);
  return deletedTask;
};

const updateById = async (id, task) => {
  const { title, status } = task;
  const query = 'UPDATE task SET title = ?, status = ? WHERE id = ?';
  const [updatedTask] = await connection.execute(query, [title, status, id]);
  return updatedTask;
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
};