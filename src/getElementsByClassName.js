// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var elementsByClass = [];

  var findElementsByClass = function(element) {
    if (element.classList !== undefined) {
      if ( element.classList.contains(className)) {
        elementsByClass.push(element);
      }

      for (var i = 0; i < element.childNodes.length; i++) {
        findElementsByClass(element.childNodes[i]);
      }
      
    }
  };
  findElementsByClass(document.body);
  return elementsByClass;
};
