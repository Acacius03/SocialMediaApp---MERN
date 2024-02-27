const express = require('express');
// const connection = require('../config/database');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/', blogController.index);

router.post('/', blogController.store);

router.get('/:id', blogController.show);

router.put('/:id', blogController.update);

router.delete('/:id', blogController.destroy);

module.exports = router;
