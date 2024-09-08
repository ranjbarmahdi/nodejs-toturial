let number = 10;

function next() {
    return ++number;
}

function prev() {
    return --number;
}

function square() {
    return number ** number;
}

module.exports = {
    number,
    next,
    prev,
    square,
};
