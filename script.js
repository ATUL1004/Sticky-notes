
let text_area = document.getElementById("text_area");
let color = document.getElementById("color_input");
let btn = document.getElementById("button");

let notes_container = document.getElementById("notes_container");

function addnote(){

    if(text_area.value ===""){
        alert("Please enter  a note");
        return
    }

    let div = document.createElement("div");
    let para = document.createElement("p");
    let cross_btn =  document.createElement("button");

    div.appendChild(para);
    div.appendChild(cross_btn);

    cross_btn.innerText = "X";
    para.innerText = text_area.value;

    
    div.style.backgroundColor = color.value;
    message.style.display = "none";
    
    // styling use in cross button
    cross_btn.style.position = "absolute";
    cross_btn.style.top = "5px";   
    cross_btn.style.right = "5px";


    notes_container.appendChild(div);
    text_area.value ="";

    cross_btn.addEventListener('click',function(){
        div.style.display = "none"; 
    })
}

btn.addEventListener('click',addnote);

