"use strict";
window.onload = function(){
    let btn = document.getElementById("calcular");
    btn.onclick = function(){
        let b, h;
        b = Number(document.getElementById("base").value);
        h = Number(document.getElementById("altura").value);
        document.getElementById("resultado").value = ((b*h)/2);
    }
}

