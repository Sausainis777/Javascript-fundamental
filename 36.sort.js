function sortUserNameAscending(usernames) {
    usernames.sort()
    return usernames
}
const usernames = ["Goda", "Agne", "Tomas", "Jonas"]
const sortedUserNames = sortUserNameAscending(usernames)
console.log(sortedUserNames)