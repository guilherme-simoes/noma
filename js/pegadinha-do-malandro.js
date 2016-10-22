//var easter_egg = new Konami();
//easter_egg.load('http://snaptortoise.com?konami');


var easter_egg = new Konami(
    function() {
        var d = document.getElementById("noma-logo");
        d.className += "cabeca";
    )}
);
