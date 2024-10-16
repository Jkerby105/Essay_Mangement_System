const express = require('express');
const router = express.Router();
const {postEssay,getAllEssay, getOneEssay} = require('../controllers/essay');
const {checkAuth} = require('../util/auth');

// router.use(checkAuth)

router.post("/create",postEssay)

router.get("/allEssay/:id",getAllEssay);

router.get("/oneEssay",getOneEssay);

module.exports = router;