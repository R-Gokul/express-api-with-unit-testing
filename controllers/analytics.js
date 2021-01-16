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
    res.send({"ingested" : result.id});
    } catch (error) {
        res.status(400).send({"message" :"Some error occurred"});
    }
}