const fibonacci = function(sequenceNumber) {

    if(Number(sequenceNumber) === NaN){
        return "Not a number"
    }else {
        sequenceNumber = Number(sequenceNumber)
    }

    // return 1 for 1st and 2nd sequence
    if ( sequenceNumber === 1 || sequenceNumber === 2) {
        return 1
    }

    //return 0 for the 0th sequence or reject strings and return 0
    if ( sequenceNumber === 0 ) {
        return 0
    }

    // reject negative numbers with "OOPS"
    if ( sequenceNumber < 0) {
        return "OOPS"
    }

    // initialize a default fibonacci array containing 1, 1
    let fibSeqArray = [1, 1]
    let extraSequenceToBeAdded = sequenceNumber - 2;

    for( let i = 0; i < extraSequenceToBeAdded; i++) {
        fibSeqArray.push(fibSeqArray[0+i] + fibSeqArray[1+i])
    }

    return fibSeqArray[sequenceNumber-1]
};

// Do not edit below this line
module.exports = fibonacci;