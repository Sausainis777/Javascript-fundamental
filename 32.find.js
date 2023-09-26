
function findUserByUserName(users, username){
    const index = users.findIndex(user => user.name === username)
    return index;
}
const users = [
    {id: 1, name: "Petras"},
    {id: 2, name: "Jonas"},
    {id: 3, name: "Siuzi"},
    {id: 4, name: "Arina"},
]

const userNameToFind = "Siuzi";
const index = findUserByUserName(users, userNameToFind);
console.log(index);