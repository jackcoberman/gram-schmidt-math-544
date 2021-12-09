'use strict';

const models = require('../data/matrix.data');
const gramSchmidt = require('../../src/utils/gramSchmidt');

describe('Gram-Schmidt tests', () => {
    it('it should successfully compute with linear dependence', () => {
        const res = gramSchmidt.gramSchmidt(models.DEPENDENT_MATRIX);
        expect(res).toEqual([ models.DEPENDENT_MATRIX[0] ]);
    });

    it('it should successfully compute with linear dependence for matrices with negatives', () => {
        const res = gramSchmidt.gramSchmidt(models.NEGATIVE_DEPENDENT_MATRIX);
        expect(res).toEqual([ models.NEGATIVE_DEPENDENT_MATRIX[0] ]);
    });

    it('it should successfully compute the result of a small matrix', () => {
        const res = gramSchmidt.gramSchmidt(models.SMALL_MATRIX);
        expect(res).toEqual( models.SMALL_MATRIX );
    });

    it('it should successfully compute the result of a large matrix', () => {
        const res = gramSchmidt.gramSchmidt(models.LARGE_MATRIX);
        const ans = [
            [ 3, 6, 4, 7, -1 ],
            [
                0.13513513513513514,
                0.2702702702702703,
                -6.81981981981982,
                3.315315315315315,
                -2.045045045045045
            ],
            [
                2.9095814496135337,
                -0.18083710077293258,
                -1.1035438238296633,
                0.11506489718535873,
                4.035000729181858
            ],
            [
                9.415043032154973,
                2.780830366404082,
                -0.993916626951866,
                -6.813770289590982,
                -6.7419472400549445
            ],
            [
                2.715707880538035,
                -6.114313064369259,
                1.7350355903437444,
                2.8229068758224307,
                -1.8382642524694592
            ],
            [
                -2.3314683517128287e-15,
                -7.771561172376096e-16,
                5.329070518200751e-15,
                0,
                -1.7763568394002505e-15
            ]
        ];
        expect(res).toEqual(ans);
    });

    it.skip('it should successfully compute for a random matrix', () => {
        const matrix = models.RANDOM_MATRIX;
        const res = gramSchmidt.gramSchmidt(matrix);
    });
}); 