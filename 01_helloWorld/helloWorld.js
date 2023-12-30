const helloWorld = function() {
  return 'Hello, World!'
};
// module.exports exports the function so that it can be imported 
// with require() in the spec.js file.
module.exports = helloWorld;
