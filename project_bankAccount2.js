var accounts = [];


function createAccount(account) {
    accounts.push(account);
    return account;

}

function getAccount(username) {
    var requiredAccount
    for(var x = 0; x<accounts.length; x++) {
        if (username == accounts[x].username) {
            requiredAccount = accounts[x];
         
        }

    }
    return requiredAccount;
   
}
function deposit(amount, account) {
    account.balance = account.balance + amount;

}
function withdraw(amount, account) {
    account.balance = account.balance - amount;
}
function getBalance(account) {
    return account.balance;
}
var myAccount = createAccount({
    username: 'Ritik',
    balance: 0
});
deposit(100, myAccount);
console.log(getBalance(myAccount));
withdraw(11, myAccount);
console.log(getBalance(myAccount));
var x = getAccount('Ritik');
console.log(getBalance(x));
