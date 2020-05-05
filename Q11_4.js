var number;
var output;

function start() {
    var btn = document.getElementById("roundBtn");
    btn.addEventListener("click", roundNumber,false);
}

function roundNumber() {
    number = document.getElementById("number").value;
    output = document.getElementById("outputs");
    output.innerHTML = "The number " + number +
        "\n round to integer: " + roundToInteger(number) +
        "\n round to tenth:" + roundToTenths(number) +
        "\n round to hundred: " + roundToHundredths(number) +
        "\n round to thousand: " + roundToThousandths(number);
}
function roundToInteger( number ){
    return (Math.floor(number + .5));
}

function roundToTenths( number ){
    return (Math.floor( number * 10 + .5 ) / 10);
}

function roundToHundredths( number ){
    return (Math.floor( number * 100 + .5 ) / 100);
}
function roundToThousandths( number ){
    return (Math.floor( number * 1000 + .5 ) / 1000);
}

window.addEventListener("load", start, false);
