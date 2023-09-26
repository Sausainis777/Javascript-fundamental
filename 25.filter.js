function filterUsersByAge(users, minAge, maxAge){
const filteredUsers = users.filter((user) => user.age >= minAge && user.age <= maxAge );
return filteredUsers;
}
const users = [
    {name: "Rokas", age: 23},
    {name: "Tomas", age: 30},
    {name: "Jonas", age: 40},
    {name: "Pablo", age: 50}
]
const minAge = 20;
const maxAge = 45;

const filteredUsers = filterUsersByAge(users, minAge, maxAge);

console.log(filteredUsers)