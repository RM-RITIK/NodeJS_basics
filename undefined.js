function greetUser(name) {
    if(name == undefined) {
        console.log("hello world");
    }
    else {
        console.log("hello " + name + "!" );
    }

}
var name = 'ritik';
greetUser(name);
greetUser();