const { Op, DatabaseError } = require('sequelize')
const {subtractSecondsFromCurrentTime} = require('../utils');
const Analytics = require('../models/analytics');
// Function subtractSecondsFromCurrentTime is a utility function which accepts the seconds to subtract from thee current time and
// returns the javascript date object
module.exports.postAnalytics = async(req, res) =>{
    try {
    console.log(req.body);
    const data = req.body;
    let result = '';
    for(let item of  data){
        console.log(item)
        item = {...item, date: new Date() }
        console.log(item)
        var t = new Date();
         t.setSeconds(t.getSeconds() - 2);
        let isExist = await Analytics.count({ where:{ date: { [Op.gte] : t}, user: item.user, eventType: item.eventType } })
        console.log("is" , isExist)
        if(isExist > 0)
            continue;
        result = await Analytics.create(item);
    }
    // const insertObj= { eventType: req.body.eventType, user: req.body.user, date: req.body.date ? req.body.date : new Date() };
    // var t = new Date();
    // t.setSeconds(t.getSeconds() - 5);
    // const isExist = await Analytics.count({ where:{ date: { [Op.gte] : t}, user: insertObj.user, eventType: insertObj.eventType } })
    // console.log("is" , isExist)
    // if(isExist > 0)
    //     return res.status(401).send({"message" :"Same request with 5sec reject"});
    // const result = await Analytics.create(insertObj);
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