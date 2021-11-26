import clonedeep from 'lodash.clonedeep';

export const gramSchmidt = (matrix) => {
    // inspired by the Gram Schmidt Algorithm I had to write in Linear Algebra Lab
    let rows = matrix.length;
    let cols = matrix[0].length;
    let Q = clonedeep(matrix);
}