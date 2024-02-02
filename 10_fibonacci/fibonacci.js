const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS";
    };

    console.log("Type of index before conversion: " + typeof index);

    intIndex = parseInt(index);
    console.log("Type of index after conversion: " + typeof intIndex);

    const startArr = [0,1];

    for (let i = 2; i <= index; i++) {
        startArr.push(startArr[i-2]+startArr[i-1]);
        console.log(startArr);
    }

    return startArr[index];

};

// Do not edit below this line
module.exports = fibonacci;
