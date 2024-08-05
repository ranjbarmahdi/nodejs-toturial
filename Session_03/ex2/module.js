let number = 10;

exports.next = function () {
  return ++number;
};

exports.prev = function() {
  return --number;
};

exports.square = function() {
  return number * number;
};




console.log(exports);