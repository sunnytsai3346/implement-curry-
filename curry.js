// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...args) {
    // Check if enough arguments have been provided
    if (args.length >= fn.length) {
      return 
        
        fn(...args); // Call the original function
        
    } else {
      // Return a function to collect more arguments
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}

