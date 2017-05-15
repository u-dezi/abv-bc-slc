var findPrime = function(upperBound) {

	// ignore all input less than 2
	if (upperBound < 2){
		return "Not a prime number";
	}
	
	// responed with error message if string
	if (typeof upperBound === 'string' || upperBound instanceof String){
		return "Please enter a number";
	}
	

	
		
	// build array to mark numbers with
	var isComposite = [upperBound];

	// array to hold primes 
	var primes = []

	// mark 0, 1 as not prime
	isComposite[0] = 1;
	isComposite[1] = 1;

	//This section is meant to mark all non-prime numbers with 1,
	// it does this by marking the array space as "1"  example 
	// isComposite[4] = 1, means that 4 is not a prime number

	// loop from 2 to sqrt(upperBound)
	for (let m = 2; m*m <= upperBound; m++){
		// if prime (ie !== 1)
		if (isComposite[m] !== 1){
		  // now mark off all multiples starting at m^2
		  for (var z = m*m; z <= upperBound; z += m){
			// mark position z as composite (ie. === 1) 
			isComposite[z] = 1;
		  }
		}
	}



	let p = 0;	
	// print all primes by scanning array
	for (let values = 0; values <= upperBound; values++){
		// when you find a unmarked number
		if (isComposite[values] !== 1){
		// put it in the prime array
		primes[p] = values;
		// increment to next cell in array
		p++;
		}
	}
	
	return(primes);
}