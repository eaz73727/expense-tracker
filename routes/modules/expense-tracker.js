const express = require('express')
const router = express.Router()
const expenseTrackerController = require('../../controllers/expense-tracker-controller')

router.post('/new', expenseTrackerController.postNewTracker)
router.delete('/:id', expenseTrackerController.deleteTracker)
router.put('/:id', expenseTrackerController.putTracker)
router.get('/:id/edit', expenseTrackerController.editTrackerPage)
router.get('/partial', expenseTrackerController.partialTracker)
router.get('/new', expenseTrackerController.newTrackerPage)
router.get('/', expenseTrackerController.homePage)

module.exports = router
