const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const resourceRoute = require('./routes/resourceRoute')
const projectRoute = require('./routes/projectRoute')
const taskRoute = require('./routes/taskRoute')

const server = express();
server.use(express.json());
server.use(morgan());

server.use('/api/resources', resourceRoute)
server.use('/api/projects', projectRoute)
server.use('/api/tasks', taskRoute)




module.exports = server

