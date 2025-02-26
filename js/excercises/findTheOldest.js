const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let arr = people.sort((a,b)=> {
        if (b.yearOfDeath == undefined) {
            b.yearOfDeath = currentYear;
        }
        if (a.yearOfDeath == undefined) {
            a.yearOfDeath = currentYear;
        }
        let ageA = a.yearOfDeath - a.yearOfBirth;
        let ageB = b.yearOfDeath - b.yearOfBirth;
        return ageB > ageA ? 1 : -1;
    })

    return arr[0];
};
// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

// findTheOldest(people);
  // Do not edit below this line
module.exports = findTheOldest;
