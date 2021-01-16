const { Op } = require('sequelize')
const {subtractSecondsFromCurrentTime} = require('../utils');
const Analytics = require('../models/analytics');
// Function subtractSecondsFromCurrentTime is a utility function which accepts the seconds to subtract from thee current time and
// returns the javascript date object
module.exports.postAnalytics = async(req, res) =>{
    try {
    console.log(req.body);
    const insertObj= { eventType: req.body.eventType, user: req.body.user, date: req.body.date };
    const result = await Analytics.create(insertObj);
    console.log(result.id);
    res.status(201).send({"ingested" : result.id});
    } catch (error) {
        res.status(400).send({"message" :"Some error occurred"});
    }
}
module.exports.getAnalytics = async(req, res) =>{
    try {
    const result = await Analytics.findAll();
    console.log(result.id);
    res.status(200).send( result);
    } catch (error) {
        res.status(400).send({"message" :"Some error occurred"});
    }
}
module.exports.notAllow = async(req, res) =>{
    try {
    
    res.status(405).send({"message" :"API dose not allow deleting or modifying events"});
    } catch (error) {
        res.status(400).send({"message" :"Some error occurred"});
    }
}