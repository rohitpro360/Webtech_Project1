let p1 = document.getElementById("popUp");
let p2 = document.getElementById("bt1");
let p3 = document.getElementById("bt2");

p2.addEventListener("click",()=>{
    p1.classList.add("open");
    let b = document.getElementById("mblock");
    
})

document.getElementById("bt2").addEventListener("click",()=>{
    p1.classList.remove("open");
}) 
