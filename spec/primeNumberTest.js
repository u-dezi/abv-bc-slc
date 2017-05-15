describe('toEqual', function() {
    // test case 1
	it('passes if computes prime of 3', function() {
		expect(findPrime(3)).toEqual([2, 3]);
    });
	// test case 2
	it('passes if computes prime of 5', function() {
		expect(findPrime(5)).toEqual([2, 3, 5]);
    });
	// test case 3
	//it('passes if computes prime of 5', function() {
	//	expect(findPrime(5)).toEqual([2, 3, 5]);
    //});
});