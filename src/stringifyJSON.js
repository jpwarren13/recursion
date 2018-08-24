// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  } else if (obj.length ===  0 && Array.isArray(obj)) {
    return '[]';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj) && obj.length > 0){
    //return '"[' + obj + ']"';
  return '[' + obj + ']';
  }
};
