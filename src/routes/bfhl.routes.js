const router = require('express').Router();
const controller = require('../controllers/bfhl.controller');

router.post('/', controller.postBfhl);

module.exports = router;
