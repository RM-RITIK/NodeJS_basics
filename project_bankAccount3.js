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
    if(typeof amount != "number") {
        alert("please enter a number!");
    }
    else {
    account.balance = account.balance + amount;}

}
function withdraw(amount, account) {
    if(typeof amount != "number") {
        alert("please enter a number!");
    }
    else {
    account.balance = account.balance - amount;}
}
function getBalance(account) {
    return account.balance;
}
var myAccount = createAccount({
    username: 'Ritik',
    balance: 0
});
function getBalanceGetter(account) {

}
