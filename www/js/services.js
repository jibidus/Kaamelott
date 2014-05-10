angular.module('kaamelott.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Sentences', function($filter) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var allSentences = [
    { id: 0, text: 'Scruff McGruff (Arthur)', character: 'Arthur', episode: 'Episode 1', book: 1, rate: 2 },
    { id: 1, text: 'G.I. Joe (Leodagan)', character: 'Leodagan', episode: 'Episode 2', book: 2, rate: 2 },
    { id: 2, text: 'Miss Frizzle (Caradoc)', character: 'Caradoc', episode: 'Episode 3', book: 3, rate: 1 },
    { id: 3, text: 'Si Monsieur et Madame préfèrent s\'envoyer des fions dans l\'intimité, je peux aussi me retirer.', character: 'angharad', episode: 'La Joute Ancillaire', book: 1, rate: 3 },
    { id: 4, text: 'Oulala (Merlin)', character: 'Merlin', episode: 'Episode 4', book: 3, rate: 4 }
  ];

  shuffle(allSentences);
  
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
  		shuffle(allSentences);
  	}
  };
  
})

.factory('Characters', function() {

	var allCharacters = [ 
	{ id: 'arthur', name: 'Arthur' }, 
	{ id: 'leodagan', name: 'Leodagan' }, 
	{ id: 'caradoc', name: 'Caradoc' }, 
	{ id: 'perceval', name: 'Perceval' }, 
	{ id: 'merlin', name: 'Merlin' },
	{ id: 'angharad', name: 'Angharad' }
	];

  return {
	  
    all: function() {
      return allCharacters;
    },
    empty: function() {
    	return {id: 'empty', name: 'empty'};
    }
  };
  
})

.factory('Books', function() {

	var allBooks = [ 'I', 'II', 'III', 'IV', 'V', 'VI' ];

	return {
		all: function() {
			return allBooks;
		},
		get: function(index) {
			return allBooks[index];
		}
	};
  
})

.factory('Quiz', function(Sentences) {

	var nbSentences = 20;

	return {
	  	build: function() {
	  		sentences = angular.copy(Sentences.all());
	  		shuffle(sentences);
	  		return sentences.slice(0, nbSentences);
	  	},
	    saveScore: function() {
	    	// TODO add remote service
	    },
	    getBestScore: function() {
	    	// TODO add remote service
	      return 10;
	    },
	    computeScore: function(sentence, character, book) {
	    	console.debug('compute score !!');
	    	console.debug(sentence);
	    	console.debug(character);
	    	console.debug(book);
	    	var score = 0;
	    	if (character && sentence.character === character.name){
	    		score += 5;
	    	}
	    	if (book && sentence.book === book){
	    		score += 10;
	    	}
	    	return score;
	    }
	  };
	  
})

;
