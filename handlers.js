'use strict';
const models = require('./models');

const request = require('request-promise');

function createCollection (req,res) {
  models.Tags.findOrCreate({where: {name: req.params.tagname}})
  .spread((data,created)=>{
    if(created || 
      (data.earliest_timestamp === null && data.latest_timestamp === null)){
      return request('https://api.instagram.com/v1/tags/' + 
        req.params.tagname +
        '/media/recent?access_token=' +
        process.env.INSTAGRAM_TOKEN);
    }
    else {
      let requests = []; // array of promises
      if(req.body.start < data.earliest_timestamp){
        requests.push(request('https://api.instagram.com/v1/tags/' + 
        req.params.tagname +
        '/media/recent?access_token=' +
        process.env.INSTAGRAM_TOKEN);))
      }
      retun request('')
    }
  });
}

function getCollection (req,res) {
  models.Tags.find({
    where: {
      name: req.params.tagname,
    },
    include: [{
      model: Media,
      where: {
        time_tagged: {
          $between: [new Date(req.query.start), new Date(req.query.end)],
        }
      }
    }]
  })
  .then((data)=>{
    res.json(data);
  })
}

module.exports = {
  createCollection:createCollection,
  getCollection:getCollection,
}
