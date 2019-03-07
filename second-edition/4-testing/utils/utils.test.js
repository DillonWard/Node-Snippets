const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(2);
            expect(res).toBe(4).toBeA('number');
        });

        it('should async square a number', (done) => {
            utils.asyncSquare(2, (sum) => {
                expect(sum).toBe(4).toBeA('number');
                done();
            });
        });

    });

    describe('#object include', () => {
        it('should verify first and last name are set', () => {

            var userObject = {
                age: 23
            }
            var res = utils.setName(userObject, 'Dillon Ward');

            expect(res).toInclude({
                firstName: 'Dillon',
                lastName: 'Ward'
            });
        });

    });


});

/*
it('should expect some values', () =>{
    //expect(12).toNotBe(11);
    //expect({name: 'Dillon'}).toEqual({name: 'Dillon'});
    // expect([2,3,4]).toExclude(5);
    expect({
        name: 'Dillon',
        age: 23,
        loction: 'Ireland'
    }).toInclude({
        age: 23
    });
});
*/