const fs = require('fs')

// fs.writeFile(FILEPATH AND NAME , DATA, ERR HANDLING)
fs.writeFile("./Utils/house.txt", "Whats up?", err => console.log(err))
// fs.writeFileSync()

function add(num1, num2) {
    return num1 + num2
}

console.log(add(6452, 7))