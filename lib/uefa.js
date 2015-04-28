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

exports.clubs = function(association) {
  // association = association || '';

  return _.map(clubs.pages, function(club){
    return _.map(club.results, function(result){
      var name = short(result.pageUrl);
      if (association && association === name) {
        return {
          association: short(result.pageUrl),
          club: result['clubs/_text'],
          url: result.clubs
        };
      }

      // return {
      //   association: short(result.pageUrl),
      //   club: result['clubs/_text'],
      //   url: result.clubs
      // };
    });
  });
};

exports.associations = function() {
  return _.map(associations.results, function(association) {
    return {
      name: association['association/_text'],
      shortName: short(association.association),
      url: association.association
    };
  });
};
