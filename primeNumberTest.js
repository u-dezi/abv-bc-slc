describe('toEqual', function() {
    // test case 1
	it('passes if computes prime of 3', function() {
		expect(findPrime(3)).toEqual([2, 3]);
    });
	// test case 2
	it('passes if computes prime of 5', function() {
		expect(findPrime(5)).toEqual([2, 3, 5]);
    });
	 //test case 3
	it('passes if computes prime of 2', function() {
		expect(findPrime(2)).toEqual([2]);
    });
	 //test case 4
	it('passes if showes error message for string', function() {
		expect(findPrime('just messing with you')).toEqual("Please enter a number");
    });
	//test case 5
	it('passes if showes 1 is not prime', function() {
		expect(findPrime(1)).toEqual("Not a prime number");
    });
	//test case 6
	it('passes if showes 0 is not prime', function() {
		expect(findPrime(0)).toEqual("Not a prime number");
    });
	//test case 7
	it('passes if showes -30 is not prime', function() {
		expect(findPrime(-30)).toEqual("Not a prime number");
    });
	//test case 8
	it('passes if showes -789 is not prime', function() {
		expect(findPrime(-789)).toEqual("Not a prime number");
    });
	//test case 9
	it('passes if showes -89 is not prime', function() {
		expect(findPrime(-89)).toEqual("Not a prime number");
    });
	 //test case 10
	it('passes if computes prime of 2', function() {
		expect(findPrime(2)).toEqual([2]);
    });
});