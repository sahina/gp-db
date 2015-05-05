var util = require('util');
var assert = require('assert');
var _ = require('lodash');
var MongoClient = require('mongodb').MongoClient;
var uefa = require('./lib/uefa');

// console.log(uefa.clubs());
// console.log(uefa.associations());

var url = 'mongodb://localhost:27017/gp-db';
MongoClient.connect(url, function(err, db) {

  var clubs = _.flatten(uefa.clubs());

  db.collection('clubs').insert(clubs, function (err, result) {
    console.log(err);
    console.log(result);
    db.close();
  });

});
