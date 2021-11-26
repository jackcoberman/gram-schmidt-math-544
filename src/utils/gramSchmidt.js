// import clonedeep from 'lodash.clonedeep';

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

const addVector = (num, array) => {
    console.log(num);
    return array.map(x => x + num);
}
export const gramSchmidt = (matrix) => {
    // inspired by the Gram Schmidt Algorithm I had to write in Linear Algebra Lab
    let rows = matrix.length;
    // let cols = matrix[0].length;
    let Q = matrix;

    // // deep clone the matrix
    // // for (let r = 0; r < rows; ++r) {
    // //     Q.push([]);
    // //     for (let c = 0; c < cols; ++c) {
    // //         console.log(parseInt(matrix[r][c]));
    // //         Q[r].push(parseInt(matrix[r][c]));
    // //     }
    // // }
    // console.log(matrix);
    console.log(Q);

    // Q = matrix.map(x => x = x.map(y => y = parseInt(y)));
    // console.log(Q);


    // compute orthogonal vectors
    for (let i = 1; i < rows; ++i) {
        let sum = 0;
        for (let j = 0; j < i; ++j) {
            sum += scaleVector((dotProduct(Q[j], Q[i])/dotProduct(Q[j],Q[j])), Q[j]); 
        }
        Q[i] = addVector(-1 * sum, Q[i]);
    }
    return Q;
};