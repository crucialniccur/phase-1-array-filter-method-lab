// // Code your solution here
// const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
// function findMatching(collection, driverName) {
//   return collection.filter(function (driver) {
//     return driver.toLowerCase() === driverName.toLowerCase();
//   });
// }

// console.log(findMatching(drivers, "Sammy"));
// console.log(findMatching(drivers, "Bobby"));

// // function fuzzyMatch()
// function fuzzyMatch(collection, driverName) {
//   return collection.filter(function (driver) {
//     return driver.toLowerCase() === driverName.toLowerCase();
//   });
// }

// // function matchName()
// function matchName(collection, name, hometown) {
//   return collection.filter(function (driver) {
//     return driver.name === name;
//   });
// }

// console.log(drivers, "Bobby");

// Code your solution here

// Function to find all drivers that match the passed-in name
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    findMatching,
    fuzzyMatch,
    matchName,
  };
}
