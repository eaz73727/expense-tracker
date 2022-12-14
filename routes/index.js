const express = require('express')
const router = express.Router()
const expenseTracker = require('./modules/expense-tracker')
const user = require('./modules/user')
const { authenticator } = require('../middleware/auth')
const { generalErrorHandler } = require('../middleware/error-handler')

router.use('/users', user)
router.use('/tracker', authenticator, expenseTracker)
router.get('/', (req, res) => res.redirect('/tracker'))
router.use(generalErrorHandler)

module.exports = router
