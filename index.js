// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
//2620. Counter


/**
 * @param {number} n
 * @return {Function} counter
 */
let counter = 0;

var createCounter = function(n) {
    
    return function() {
            return n++;
    };
};
