var input;
var output;

function start() {
    input = window.prompt("Enter a sentence: ");
    output = document.getElementById("output");

    reverse();
}

function reverse() {
    var token = input.split(" ");
    var i;
    var markup = "";

    for(i = token.length - 1; i>= 0; --i){
        markup += "<div>" + token[i] + "</div>";
    }

    output.innerHTML = markup;
}

window.addEventListener("load", start, false);