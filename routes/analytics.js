const router = require('express').Router();
const controller = require('../controllers/analytics');

router.post('/', controller.postAnalytics)
router.get('/', controller.getAnalytics)
router.put('/:id', controller.notAllow)
router.delete('/:id', controller.notAllow)
router.patch('/:id', controller.notAllow)

module.exports = router;

