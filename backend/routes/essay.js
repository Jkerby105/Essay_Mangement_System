const express = require('express');
const router = express.Router();
const {postEssay,getAllEssay, getOneEssay, patchEssay, deleteEssay} = require('../controllers/essay');
const {checkAuth} = require('../util/auth');

// router.use(checkAuth)

router.post("/create",postEssay)

router.delete("/delete/:id", deleteEssay)

router.patch("/essayUpdate/:id", patchEssay)

router.get("/allEssay/:id",getAllEssay);

router.get("/oneEssay/:id",getOneEssay);

module.exports = router;