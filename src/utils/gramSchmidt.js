import clonedeep from 'lodash.clonedeep';

const dotProduct = (vector1, vector2) => {
    let sum = 0;
    for (let i = 0; i < vector1.length; ++i) {
        sum += vector1[i] * vector2[i];
    }
    console.log("dot product is " + sum);
    return sum;
}

const scaleVector = (scale, vector) => {
    let v = vector.map(x => x * scale);
    console.log("Scale: " + scale);
    console.log("OG vector : " + vector);
    console.log(v);
    return v;
}

const addVectors = (vector1, vector2) => {
    let vector = [];
    console.log(vector1);
    for (let i = 0; i < vector1.length; ++i) {
        vector.push(vector1[i] + vector2[i]);
    }
    return vector;
}
export const gramSchmidt = (matrix) => {
    // inspired by the Gram Schmidt Algorithm I had to write in Linear Algebra Lab
    let rows = matrix.length;
    // let cols = matrix[0].length;
    let Q = clonedeep(matrix);

    // compute orthogonal vectors
    for (let i = 1; i < rows; ++i) {
        let vecSum = clonedeep(Q[i].map(val => val = val/val - 1));
        // console.log(vecSum);
        for (let j = 0; j < i; ++j) {
            vecSum = addVectors(vecSum, scaleVector(-1 * ((dotProduct(Q[j], Q[i])/dotProduct(Q[j],Q[j]))), Q[j])); 
        }
        Q[i] = addVectors(vecSum, Q[i]);
    }

    // drop redundant vectors
    // for (let i = 0; i < Q.length; ++i) {
    //     let hasNullity = false;
    //     for (let j = 0; j < Q[i].length; ++j) {
    //         if (Number.isNaN(Q[i][j])) {
    //             hasNullity = true;
    //             break;
    //         }
    //     }
    //     if (hasNullity) {
    //         Q.pop(i);
    //         i--;
    //     }
    // }
    console.log(Q);
    return Q;
};