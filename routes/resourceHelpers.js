const db = require('../data/dbconfig.js')

function find() {
  return db('resources')
}

function add(resource){
  return db('resources').insert(resource)
}

module.exports = {
  add, 
  find
}