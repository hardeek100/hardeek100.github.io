var text = document.getElementById("effect");
var i = 0;
var t = "Hardik Poudel" //text.innerText;
var y = "";
var des = setInterval(function(){
y += t[i];
text.innerHTML = y + '|';
i += 1;
if (i == t.length){
clearInterval(des);
text.innerText = y;
}
}, 100)        


