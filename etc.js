
let p = document.getElementById("p1");
let b = document.getElementById("b1");
p.addEventListener("mousedown", ()=>{
    console.log("Handler for paragraph");
})
b.addEventListener("mousedown", event =>{
    console.log("handler for button");
    if (event.b == 2) event.stopPropagation();
});


window.addEventListener("keydown", event=>{
    if(event.key == "v"){
        document.body.style.background = "violet";
    }
    
})
window.addEventListener("keyup", e =>{
    if(e.key == "v"){
        document.body.style.background = "";
    }
})
window.addEventListener("keydown", e=>{
    if(e.key == "q" && e.ctrlKey){
        console.log("Continuing");
        alert("Are you sure?");
    }
})

//Adding dots


let lastX;
let bar = document.getElementById("bar");
bar.addEventListener("mousedown", e=>{
    if(e.button == 0){
        lastX = e.clientX;
        window.addEventListener("mousemove", moved);
        e.preventDefault();
    }
});

function moved(e){
    if(e.buttons == 0){
        window.removeEventListener("mousemove", moved);
    }else{
        let dist = e.clientX - lastX;
        let newWidth = Math.max(10, bar.offsetWidth + dist);
        bar.style.width = newWidth + "px";
        lastX = e.clientX;

    }
}


