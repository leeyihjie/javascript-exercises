const palindromes = function (str) {
    const strReplaced = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log(strReplaced);

    const strReplacedArray = strReplaced.split("");
    console.log(strReplacedArray);

    const strReplacedArrayReversed = strReplacedArray.reverse();
    console.log(strReplacedArrayReversed);

    const reversedStr = strReplacedArrayReversed.join("");
    console.log(reversedStr);

    if (reversedStr === strReplaced) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = palindromes;
