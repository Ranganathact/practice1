var text1 = document.getElementById("a");
var text2 = document.getElementById("b");
function add() {
    var result = parseInt(text1.value) + parseInt(text2.value);
    document.getElementById("c") = result;
}
var btn = document.getElementById("add");
<button >onclick = add;</button>