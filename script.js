const input = document.getElementById("input");
const buttonAdd = document.getElementById("btnAdicionar");
const item = document.getElementById("item");

function addItem(){
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;
    
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "X";
    
    btnRemover.addEventListener("click", function(){
        li.remove();
    })

    li.appendChild(btnRemover);
    item.appendChild(li);

    input.value = "";
}

buttonAdd.addEventListener("click", addItem)