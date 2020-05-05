var input;
var output;

function start() {
    var btn = document.getElementById("submitBtn");
    btn.addEventListener("click", testStr, false);

    input = document.getElementById("input");
    output = document.getElementById("output");
}

function testStr() {
    var s = input.value;

    if(s.indexOf("b") == 0){
        output.value += s + "\n";
    }else{
        alert("No string start with 'b'");
    }

    input.value = "";
    input.focus();
}

window.addEventListener("load", start, false);