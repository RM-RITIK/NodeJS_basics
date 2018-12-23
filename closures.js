function createAdder(baseNumber) {
    function otherNumber(NumberToAdd) {
        console.log(baseNumber + NumberToAdd);
    }
    return otherNumber;
}
var addTen = createAdder(10);
addTen(2);