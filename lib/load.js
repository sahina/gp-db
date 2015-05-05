var _ = require('lodash');
var MongoClient = require('mongodb').MongoClient;
var uefa = require('../lib/uefa');

module.exports = function () {
  var url = 'mongodb://localhost:27017/gp-db';

  MongoClient.connect(url, function (err, db) {

    var clubs = _.flatten(uefa.clubs());
    var associations = _.flatten(uefa.associations());

    db.collection('clubs').insertMany(clubs, function (err, result) {
      console.log(err);
      console.log(result);

      db.collection('associations').insertMany(associations, function (err, result) {
        db.close();
      });
    });

  });
};