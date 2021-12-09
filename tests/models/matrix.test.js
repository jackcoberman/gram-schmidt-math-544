'use strict';

const models = require('../data/matrix.data');
const gramSchmidt = require('../../src/utils/gramSchmidt');

// TO-DO: Update readme, add more tests, and either call sage to check results or output results in a manner that can be directly copied to sage
describe('Gram-Schmidt tests', () => {
    it('it should successfully compute with linear dependence', () => {
        const res = gramSchmidt.gramSchmidt(models.DEPENDENT_MATRIX);
        // console.log(res);
        // console.log(models.DEPENDENT_MATRIX[0]);
        expect(res).toEqual([ models.DEPENDENT_MATRIX[0] ]);
    });

    it('it should successfully compute with linear dependence for matrices with negatives', () => {
        const res = gramSchmidt.gramSchmidt(models.NEGATIVE_DEPENDENT_MATRIX);
        console.log(res);
        expect(res).toEqual([ models.NEGATIVE_DEPENDENT_MATRIX[0] ]);
    });

    it('it should successfully compute the result of a small matrix', () => {
        const res = gramSchmidt.gramSchmidt(models.SMALL_MATRIX);
        expect(res).toEqual( models.SMALL_MATRIX );
    });

    // it('it should successfully compute the result of a large matrix', () => {
    //     const res = gramSchmidt.gramSchmidt(models.LARGE_MATRIX);
    //     console.log(res);
    // });

    it('it should successfully compute for a random matrix', () => {
        const matrix = models.RANDOM_MATRIX;
        console.log(matrix);
        const res = gramSchmidt.gramSchmidt(matrix);
        console.log(res);
    });
}); 