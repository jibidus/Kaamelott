angular.module('kaamelott.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Sentences', function($filter) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var allSentences = [
    { id: 0, texte: 'Scruff McGruff', personnage: 'Arthur', livre: 1 },
    { id: 1, texte: 'G.I. Joe', personnage: 'Leodagan', livre: 2 },
    { id: 2, texte: 'Miss Frizzle', personnage: 'Caradoc', livre: 3 },
    { id: 3, texte: 'Ash Ketchum', personnage: 'Perceval', livre: 4 },
    { id: 4, texte: 'Oulala', personnage: 'Merlin', livre: 3 }
  ];

  shuffle();
  
  return {
	  
    all: function() {
      return allSentences;
    },
  	get: function(index) {
  		return allSentences[index];
  	},
  	size: function() {
  		return allSentences.length;
  	},
  	shuffle: function() {
  		shuffle();
  	}
  };
  
  function shuffle() {
	  allSentences.sort( function (a,b) { 
		  if (Math.random() * 2 - 1 > 0) {
			  return 1;
		  } else {
			  return -1;
		  }
	  }); 
  }
  
});
