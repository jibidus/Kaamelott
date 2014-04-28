angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Citations', function($filter) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var citations = [
    { id: 0, texte: 'Scruff McGruff', personnage: 'Arthur', livre: 1 },
    { id: 1, texte: 'G.I. Joe', personnage: 'Leodagan', livre: 2 },
    { id: 2, texte: 'Miss Frizzle', personnage: 'Caradoc', livre: 3 },
    { id: 3, texte: 'Ash Ketchum', personnage: 'Perceval', livre: 4 },
    { id: 4, texte: 'Oulala', personnage: 'Merlin', livre: 3 }
  ];

  
  return {
	  
    all: function() {
      return citations;
    },
  	get: function(index) {
  		return citations[index];
  	}
  };
});
