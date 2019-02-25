const express = require('express')
const router = express.Router()
const db = require('../db/assessments')

router.get('/', (req, res) => {
  db.getAssessments()
    .then(assessments => {
      res.status(202).json(assessments)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getAssessmentsById(id)
    .then(assessment => {
      res.json(assessment)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
