const db = require('../data/dbconfig.js')

function find() {
  return db('task').join('projects', 'projects.id', 'task.project_id').select('projects.name', 'projects.description', 'task.id', 'task.description', 'task.notes', 'tasks.completed')
}

function add(task){
  return db('task').insert(task)
}

module.exports = {
  add, 
  find
}