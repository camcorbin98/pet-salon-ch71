function update(){
    let title = document.getElementById("title");

    title.textContent = "Hello class!";

    let paragraphs = document.getElementsByClassName("text");
    paragraphs[0].style.color = "blue";
    paragraphs[1].style.color = "red";
}

function add(){
    let value = document.getElementById("inputField").value;
    

    let list = document.getElementById("list");

    let listItem = document.createElement("li");
    listItem.innerHTML = value;

    list.appendChild(listItem);
    document.getElementById("inputField").value = "";
}