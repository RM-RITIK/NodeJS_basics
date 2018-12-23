var account = {
    balance : 0
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
