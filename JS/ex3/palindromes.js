const palindromes = function (sentence) {
    // if(!sentence){
    //     return false
    // }

    // let charArray = stringToCharArray(sentence)

    // for( let i = 0; i < charArray.length; i++){
    //     let charToBeCompared = charArray.length-1-i;
    //     if(charArray[i].toLowerCase() != charArray[charToBeCompared].toLowerCase()){
    //         return false;
    //     }
    // }
    // return true;

    return palindromes2(sentence)
};

function stringToCharArray(str) {
    let tempArr = str.split("").filter(char => /[a-zA-Z0-9]/g.test(char));
    return tempArr
}

function palindromes2(string) {
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleansedString = string
        .toLowerCase()
        .split("")
        .filter((char) => alphanumeric.includes(char))
        .join("")

    const reversedString = cleansedString.split("").reverse().join('');

    return cleansedString === reversedString
}

// Do not edit below this line
module.exports = palindromes;