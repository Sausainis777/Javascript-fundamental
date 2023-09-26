function findUserById (userId, users){
    const foundUser = users.find(user => user.id === userId) 
    return foundUser;
}
const users = [
    {id: 1, name: "Rokas"},
    {id: 2, name: "Tomas"},
    {id: 3, name: "Jonas"},
    {id: 4, name: "Mikas"},
    {id: 5, name: "Karolis"}
]
const userIdToFind = 2;
const user = findUserById(userIdToFind, users);
console.log(user)