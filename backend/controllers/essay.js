const { Model } = require('mongoose');
const mongoose = require('mongoose');
const {ObjectId} = require('mongodb');
const Essay = require('../models/essay');

module.exports.postEssay = async (req,res,next) => {
    const essayDraft = req.body.draft;
    const essayTitle = req.body.essayTitle;
    const userID = ObjectId.createFromTime(req.body.userID);

    const essay = new Essay({
        title: essayTitle,
        draft: essayDraft,
        creator: userID
    })
    
    essay.save()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
}