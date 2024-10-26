const path = require('path')
const express = require('express')

const router = express.Router();
const rootDir = require('../util/path')

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'view', 'user.html'))
});

module.exports = router;