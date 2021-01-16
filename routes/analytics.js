const router = require('express').Router();
const controller = require('../controllers/analytics');

router.post('/', controller.postAnalytics)

module.exports = router;

