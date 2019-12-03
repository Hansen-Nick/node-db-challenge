const express = require('express');

const resources = require('./resourceHelpers')
const router = express.Router();

router.get('/', (req, res) => {
  resources.find()
    .then( resources => {
      res.status(200).json(resources)
    })
    .catch( err => {
      res.status(500).json({message: 'Something went wrong on our end', error: err})
    })
})

router.post('/', (req, res) => {
  const resourceInfo = req.body
  
  resources.add(resourceInfo)
    .then( () => {
      res.status(200).json({message: 'Success!', resourceAdded: resourceInfo})
    })
    .catch( err => {
      res.status(500).json({message: 'Something went wrong on our end!', error: err})
    })
})

module.exports = router