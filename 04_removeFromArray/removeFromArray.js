const removeFromArray = function(arr, ...selection) {
    console.log("Original Array: " + arr);

    console.log("Numbers to be removed: " + selection);
    for (var i = 0; i < selection.length; i++) {
        var index = arr.indexOf(selection[i]);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
    console.log("New Array: " + arr);
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
