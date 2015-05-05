var _ = require('lodash');
var mongoose = require('mongoose');
var uefa = require('../lib/uefa');
var models = require('../lib/uefa.model');
var config = require('../config');

mongoose.connect(config.mongodb.url);

module.exports = function () {
  var clubs = _.flatten(uefa.clubs());
  var associations = _.flatten(uefa.associations());

  models.Club.create(clubs);
  models.Association.create(associations);
};