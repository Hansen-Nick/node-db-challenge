const db = require('../data/dbconfig.js')

function find() {
  return db('projects')
}

function add(resource){
  return db('projects').insert(resource)
}

module.exports = {
  add, 
  find
}