const express = require('express');

const projects = require('./projectHelpers')
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
  projects.find()
    .then( resources => {
      res.status(200).json(resources.map( resource => {
        return {...resource, completed: trueFalse(resource.completed)}
      }))
    })
    .catch( err => {
      res.status(500).json({message: 'Something went wrong on our end', error: err})
    })
})

router.post('/', (req, res) => {

  const resourceInfo = req.body
  
  projects.add(resourceInfo)
    .then( () => {
      res.status(200).json({message: 'Success!', resourceAdded: resourceInfo})
    })
    .catch( err => {
      res.status(500).json({message: 'Something went wrong on our end!', error: err})
    })
})

module.exports = router