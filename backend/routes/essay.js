const express = require('express');
const router = express.Router();
const {postEssay} = require('../controllers/essay');
const {checkAuth} = require('../util/auth');

router.use(checkAuth)

router.post("/create",postEssay)

module.exports = router;