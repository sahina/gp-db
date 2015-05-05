var _ = require('lodash');
var associations = require('../data/uefa_associations');
var clubs = require('../data/uefa_clubs');

function short(long) {
  try {
    return long.split('association=')[1].split('/')[0];
  } catch (e) {
    return long;
  }
}

exports.clubs = function () {
  return _.map(clubs.pages, function (page) {
    return _.map(page.results, function (result) {
      return {
        association: short(page.pageUrl),
        club: result['clubs/_text'],
        url: result.clubs
      };
    });
  });
};

exports.associations = function () {
  return _.map(associations.results, function (association) {
    return {
      association: short(association.association),
      name: association['association/_text'],
      url: association.association
    };
  });
};
