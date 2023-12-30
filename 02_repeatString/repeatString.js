const repeatString = function(str, count) {
    let concStr = '';

    if (count < 0) {
        concStr = 'ERROR';
        return concStr
    };
    
    for (i=0;i<count;i++) {
        concStr = concStr + str;
    };

    return concStr;
};

// Do not edit below this line
module.exports = repeatString;
