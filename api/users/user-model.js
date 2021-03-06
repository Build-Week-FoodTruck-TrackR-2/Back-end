const db = require('../../database/db');

module.exports = {
  register,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'password', 'name', 'email', 'role').where('role', '=', 'diner');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function register(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}