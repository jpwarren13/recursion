// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  } else if (obj === undefined && Array.isArray(obj)) {
    return '[]';
  } else if (obj === undefined&& typeof obj === 'object' && !Array.isArray(obj))  {
    return '{}';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj) ){
    //return '"[' + obj + ']"';
    var stringArray = [];
    _.each(obj, function(element) {
      stringArray.push(stringifyJSON(element));
    });
    return '[' + stringArray + ']';
  } else if (typeof obj === 'object'){

    var stringifiedObject = "";
    var j = 0;
      if (obj === undefined){
      return '{}';
    }
  for (var key in obj) {
    if (typeof obj[key] === 'undefined' || typeof obj[key] === 'function') {
      j++;
    } else if (j === Object.keys(obj).length -1) {
      stringifiedObject += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
    } else {
      stringifiedObject += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      j++;
    }
  }

  return '{' + stringifiedObject + '}';
    }
  };
