function findTheOldest(people) {
    const people = [
        {
          name: "Carly",
          yearOfBirth: 1942,
          yearOfDeath: 1970,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
        {
            name: "John",
            yearOfBirth: 1999,
            yearOfDeath: 2021,
        }
      ]
  
    
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath - people[i].yearOfBirth > oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) {
            oldestPerson = people[i];
        }
    }
    
    console.log(oldestPerson);
    return oldestPerson;
}