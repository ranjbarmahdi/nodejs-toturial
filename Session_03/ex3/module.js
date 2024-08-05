let number = 10;

function next() {
  return ++number;
};

function prev() {
  return --number;
};

function square() {
  return number * number;
};

console.log("Hello");

module.exports = {
  next,
  prev,
  square,
};
