const input = document.getElementById("input");
const buttonAdd = document.getElementById("btnAdicionar");

function addItem(){
    const text = input.value.trim();

    if (text == "") return;

    const li = document.createElement("li");
    li.textContent = text;
    
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "X";
    
    btnRemover.addEventListener("click", function(){
        

    })

    
    li.appendChild(btnRemover);
    document.getElementById("item").appendChild(li);
    input.value = "";
}

buttonAdd.addEventListener("click", addItem)