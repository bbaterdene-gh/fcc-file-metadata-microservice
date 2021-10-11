const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: '/tmp/uploads/' })

// require controllers
const fileAnalyseController = require('../controllers/fileAnalyseController')

/* POST a file to analyze. */
router.post('/fileanalyse', upload.single('upfile'), fileAnalyseController.analyse)

module.exports = router;
