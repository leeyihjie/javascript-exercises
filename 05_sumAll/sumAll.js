const sumAll = function(int1, int2) {
    var small = 0;
    var large = 0;
    var sum = 0;

    if (int1 < 0 | int2 <0 | typeof(int1) != 'number' | typeof(int2) != 'number')  {
        return "ERROR"
    }

    if (int1 < int2) {
        small = int1;
        large = int2;
    }
    else if (int2 < int1) {
        small = int2;
        large = int1;
    }
    else {
        small = int1;
        large = int2;
    }

    console.log("Range of Numbers to be added: " + small + " - " + large);


    for (var i = small; i <= large; i++) {
        sum = sum + i;
    }

    console.log("Total Sum: " + sum);

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
