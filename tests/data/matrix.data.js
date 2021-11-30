const randomMatrix = require('../../src/utils/gramSchmidt');

const DEPENDENT_MATRIX = [
    [1,2,3],
    [2,4,6],
    [3,6,9]
];

const NEGATIVE_DEPENDENT_MATRIX = [
    [1,0,-2],
    [-1,0,2],
    [-2,0,4],
    [2,0,-4]
];

const SMALL_MATRIX = [
    [39]
];

const LARGE_MATRIX = [
    [3,6,4,7,-1],
    [0,0,-7,3,-2],
    [5,4,4,4,4],
    [-2,-1,-8,-9,-21],
    [3,-4,2,1,-11],
    [0,0,-10,10,10]
];

const RANDOM_MATRIX = randomMatrix.randomMatrix();

module.exports = {
    DEPENDENT_MATRIX,
    NEGATIVE_DEPENDENT_MATRIX,
    SMALL_MATRIX,
    LARGE_MATRIX,
    RANDOM_MATRIX
};