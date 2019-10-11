const express = require('express');
const router = express.Router();
const Resources = require('./resourceModel');


router.get('/', (req, res) => {
    Resources.getResources()
    .then(resource => {
    res.status(200).json(resource);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({Error: "Error getting resource."})
  })
});

router.post('/', (req, res) => {
    Resources.addResource()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({Error: "Error posting resource."})
    })
});

module.exports = router;

