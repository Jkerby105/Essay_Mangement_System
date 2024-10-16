const { Model } = require('mongoose');
const mongoose = require('mongoose');
const {ObjectId} = require('mongodb'); 
const Essay = require('../models/essay');

module.exports.postEssay = async (req,res,next) => {
    const id = req.body.userID;
    const essayDraft = req.body.draft;
    const essayTitle = req.body.essayTitle;
    const userID = Object(id);
    console.log(userID)

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

module.exports.getAllEssay = async(req,res,next) => {
    const userID = req.params.id;
    Essay.find({creator: userID})
    .then(result => {
        res.status(201).json({userEssay: result});
    })
    .catch(err => {
        console.log(err);
    })

}

module.exports.getOneEssay = async(req,res,next) => {
    console.log("Get ONE")
}