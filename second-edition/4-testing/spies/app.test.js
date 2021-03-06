const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Dillon', 23);
        expect(spy).toHaveBeenCalledWith('Dillon', 23);
    });

    it('should call saveUser with user object', () =>{
        var email = 'dillon@example.com';
        var password = '123123';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});