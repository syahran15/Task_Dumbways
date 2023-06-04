//callbacks
function hello(){
    console.log("Hello World");
}

function goodBye(){
    console.log("Hello Guys");
}

function print(callbacks) {
    callbacks();
}

print(hello);
print(goodBye);