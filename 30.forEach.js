function updateUserStats(activityData, userStats) {
    activityData.forEach((activity) => {
        if (activity.type === "login") {
            userStats.login++
        } else if (activity.type === "purchase") {
            userStats.purchases++;
            userStats.totalSpent += activity.amount
        }
    });
}
const userActivity = [
    { type: "login" },
    { type: "purchase", amount: 20 },
    { type: "purchase", amount: 50 },
    { type: "purchase", amount: 70 },
    { type: "purchase", amount: 40 }
]

const statistics = { login: 0, purchases: 0, totalSpent: 0 };

updateUserStats(userActivity, statistics);
console.log(statistics)