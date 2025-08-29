const router = require('express').Router();
const controller = require('../controllers/bfhl.controller');

router.get('/', (_req, res) => {
  res.status(200).json({ message: 'Use POST /bfhl with body: { "data": ["a","1","2","$"] }' });
});

router.post('/', controller.postBfhl);

module.exports = router;
