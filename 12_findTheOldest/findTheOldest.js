const findTheOldest = function(arr) {
    const oldest = arr.sort(function(a,b) {
        if (a.yearOfDeath == undefined) {
            a.yearOfDeath = 2024;
        }
        else if (b.yearOfDeath == undefined) {
            b.yearOfDeath = 2024;
        }

        firstPersonAge = a.yearOfDeath - a.yearOfBirth;
        console.log("a death year: ", a.yearOfDeath)
        console.log("a age: ", firstPersonAge)



        nextPersonAge = b.yearOfDeath - b.yearOfBirth;
        console.log("b death year: ", b.yearOfDeath)
        console.log("b age: ", nextPersonAge)


        if (firstPersonAge > nextPersonAge) {
            console.log("-1")
            return -1;
        }
        console.log("1")

        return 1;

    });

    return (oldest[0])
};

// Do not edit below this line
module.exports = findTheOldest;
