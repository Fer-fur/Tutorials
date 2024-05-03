const findTheOldest = function(arrayOfPeople) {
    // let ageArray = arrayOfPeople.map((people) => {
    //     if(people.yearOfDeath === undefined){
    //         let currentDate = new Date();
    //         let currentYear = currentDate.getFullYear();
    //         return currentYear - people.yearOfBirth
    //     }
    //     return people.yearOfDeath - people.yearOfBirth
    // })

    // console.log(ageArray)
    // let oldestPerson = ageArray.findIndex((age) => {
    //     return age === Math.max(...ageArray)
    // })

    // return arrayOfPeople[oldestPerson]
    return getOldest(arrayOfPeople)
};

function getOldest(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestPersonAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)

        return oldestPersonAge > currentPersonAge ? oldest : currentPerson
    })
}

function getAge(birthYear, deathYear) {
    if(!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;