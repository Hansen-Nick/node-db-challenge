const express = require('express');

const tasks = require('./taskHelpers')
const router = express.Router();

function trueFalse(int){
  if (int === 0){
    return 'false'
  }
  if (int === 1){
    return 'true'
  }
}

router.get('/', (req, res) => {
  tasks.find()
    .then( task => {
    //   if(task.length > 0){
    //     res.status(200).json(resources.map( task => {
    //       return {...task, completed: trueFalse(task.completed)}
    //   }))
    // } else {
    //   res.status(200).json(task)
    // }
    res.status(200).json(task)
    })
    .catch( err => {
      res.status(500).json({message: 'Something went wrong on our end', error: err})
    })
})

router.post('/', (req, res) => {

  const taskInfo = req.body
  
  tasks.add(taskInfo)
    .then( () => {
      res.status(200).json({message: 'Success!', taskAdded: taskInfo})
    })
    .catch( err => {
      res.status(500).json({message: 'Something went wrong on our end!', error: err})
    })
})

module.exports = router