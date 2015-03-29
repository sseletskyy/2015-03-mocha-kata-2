//var expect = chai.expect;

describe("fizzBuzz", function () {
    var fizzBuzz = require('../fizzBuzz')

    describe("when input is 1", function () {
        it("should return number", function () {
            expect(fizzBuzz(1)).to.equal(1);
        });
    })

});