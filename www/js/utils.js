function shuffle(array) {
	array.sort( function (a,b) { 
		if (Math.random() * 2 - 1 > 0) {
			return 1;
		} else {
			return -1;
		}
	}); 
}
