const accountId =144553
let accountEmail ="bhumika11@gmail.com"
var accountPassword ="12345"
accountCity ="Bhaktapur"
//let accouintState;

// accountId =2 // not allowed

/*
prefer not to use var because of issue in
block scope and functional issues
*/
accountEmail ="abc132@gmail.com"
accountPassword = "321"
accountCity="TPJ"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])
