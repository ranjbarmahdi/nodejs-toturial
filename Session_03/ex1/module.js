let number = 10;

module.exports.next = function () {
  return ++number;
};

module.exports.prev = function () {
  return --number;
};

module.exports.square = function () {
  return number * number;
};
