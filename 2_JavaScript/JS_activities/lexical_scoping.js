var myName = "Pepper";

function a() {
    var myName = "Peppy";
    console.log("line 6", myName);
}

a();

console.log("line 14", myName);

// =========================================

var myName = "Pepper";

function a() {
    var myName = "Peppy";
    function b() {
        console.log("line 6", myName);
    }

    b();
}

a();

console.log("line 14", myName);

// =========================================


var myName = "Pepper";

function b() {
    console.log("line 6", myName);
}

function a() {
    var myName = "Peppy";

    b();
}

a();

console.log("line 14", myName);