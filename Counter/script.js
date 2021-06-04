let num = 0;
let count  = document.getElementById("count");

document.getElementById("btn-i").onclick = function(){
    num += 1
    count.innerHTML = num;
};
document.getElementById("btn-d").onclick = function(){
    num -= 1
    count.innerHTML = num;
};
document.getElementById("btn-r").onclick = function(){
    num = 0;
    count.innerHTML = num;
};