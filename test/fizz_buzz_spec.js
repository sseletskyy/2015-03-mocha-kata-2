//var expect = chai.expect;

describe("fizzBuzz", function () {
    var fizzBuzz = require('../fizzBuzz')

    describe("high priority case", function () {
        describe("when input % 3 AND input % 5", function () {
            it("should return 'FizzBuzz'", function () {
                expect(fizzBuzz(15)).to.equal('FizzBuzz');
                expect(fizzBuzz(30)).to.equal('FizzBuzz');
            });
        });
    });

    describe("when input % 3 == 0", function () {
        it("should return 'Fizz", function () {
            expect(fizzBuzz(3)).to.equal('Fizz');
            expect(fizzBuzz(6)).to.equal('Fizz');
        });
    });

    describe("when input % 5 == 0", function () {
        it("should return 'Buzz'", function () {
            expect(fizzBuzz(5)).to.equal('Buzz');
            expect(fizzBuzz(10)).to.equal('Buzz');
            expect(fizzBuzz(20)).to.equal('Buzz');
        });
    });


    describe("when in all other cases", function () {
        it("should return the same number", function () {
            expect(fizzBuzz(0)).to.equal(0);
            expect(fizzBuzz(1)).to.equal(1);
            expect(fizzBuzz(7)).to.equal(7);
        });
    });

});