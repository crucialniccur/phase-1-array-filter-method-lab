// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(collection, driverName) {
  return collection.filter(function (driver) {
    return driver.toLowerCase() === driverName.toLowerCase();
  });
}

console.log(findMatching(drivers, "Sammy"));
console.log(findMatching(drivers, "Bobby"));

// function fuzzyMatch()
function fuzzyMatch(collection, driverName) {
  return collection.filter(function (driver) {
    return driver.toLowerCase() === driverName.toLowerCase();
  });
}
