angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Citations', function(localStorageService, $filter) {
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
    
    previous: function() {
    	var historyIds = localStorageService.get('historyIds');
    	
    	if (historyIds.length == 1){
    		return citations[historyIds[0]];
    	}

    	// Remove last element
    	historyIds.pop();
    	// Get previous citation
    	
    	var lastCitationId = historyIds[historyIds.length-1];
    	console.debug(lastCitationId);
    	localStorageService.set('historyIds', historyIds);
       	return citations[lastCitationId];
    },
    
    next: function() {
    	var historyIds = localStorageService.get('historyIds');
		
    	// Compute citations
    	var citationsRestantes;
    	if (historyIds){
        	citationsRestantes = $filter('excludeHistory')(citations, historyIds);
        	if (citationsRestantes.length == 0){
        		citationsRestantes = citations;
        		historyIds = [];
        	}
    	} else {
    		historyIds = [];
    		citationsRestantes = citations;
    	}
    	
    	// Random citation
    	citationsRestantesId = Math.round((citationsRestantes.length - 1) * Math.random());
    	var citation = citationsRestantes[citationsRestantesId];
	
    	// Update history
    	historyIds.push(citation.id);
    	console.debug("historyIds size = " + historyIds.length);
    	for(var index in historyIds) {
    		console.log("NEW history -> "+historyIds[index]);
    	}
    	localStorageService.set('historyIds', historyIds);
    	
    	return citation;
    },
    get: function(citationId) {
      return citations[citationId];
    }
  }
})

.filter('excludeHistory', function(){
    return function(array, historyIds){        
        var arrayToReturn = [];
        for (var id in array){
            if (historyIds.indexOf(array[id].id) == -1) {
                arrayToReturn.push(array[id]);
            }
        }
        return arrayToReturn;
    };
});