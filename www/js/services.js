angular.module('kaamelott.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Sentences', function($filter) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var allSentences = [
    { id: 0, text: 'Scruff McGruff', character: 'Arthur', book: 1, rate: 2 },
    { id: 1, text: 'G.I. Joe', character: 'Leodagan', book: 2, rate: 2 },
    { id: 2, text: 'Miss Frizzle', character: 'Caradoc', book: 3, rate: 1 },
    { id: 3, text: 'Ash Ketchum', character: 'Perceval', book: 4, rate: 3 },
    { id: 4, text: 'Oulala', character: 'Merlin', book: 3, rate: 4 }
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
