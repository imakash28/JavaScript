// const -> Constant cannot be change
// let -> 
//var -> 

const accountId=12254
let accountName="akash@gmail.com"
var accountPassword="12345"
accountCity="Faridabad"

// accountId=2                  //change not allowed
accountName="vishu@gmail.com"   //change allowed
accountPassword="56789"         //change allowed
accountCity="Delhi"             //change allowed



// Using console log() method we are printing the statements one by one
console.log(accountId)
console.log(accountName)
console.log(accountPassword)
console.log(accountCity)

// using table() of console we print data in the form oof tabular structure
console.table([accountId, accountName, accountPassword, accountCity])