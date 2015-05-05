var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClubSchema = new Schema({
  association: String,
  name: String,
  url: String
});

var AssociationSchema = new Schema({
  association: String,
  name: String,
  url: String
});

var Club = mongoose.model('Club', ClubSchema);
var Association = mongoose.model('Association', AssociationSchema);

module.exports = {
  Club: Club,
  Association: Association
};