const express = require('express');
const cricketerProfileController = require('./controllers/cricketerProfileController')
const { validateCricketerProfile } = require('../middlewares/cricketerProfileValidator');
const router = express.Router();

router.post('/createCricketer', validateCricketerProfile, cricketerProfileController.createCricketerProfile);
router.put('/updateCricketer', cricketerProfileController.updateCricketerProfile);
router.delete('/deleteCricketer/:id', cricketerProfileController.deleteCricketerProfile);
router.get('/getCricketer/:id', cricketerProfileController.fetchCricketerProfile);
module.exports = router;
