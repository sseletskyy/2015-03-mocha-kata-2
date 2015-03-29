(function () {
    var fizzBuzz;

    fizzBuzz = function (input) {
        if (input == 0) return 0;

        if (input % 15 == 0) return 'FizzBuzz';
        if (input % 3 == 0) return 'Fizz';
        if (input % 5 == 0) return 'Buzz';
        return input;
    }

    module.exports = fizzBuzz;

}).call(this);