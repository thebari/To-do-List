const input = document.getElementById("input");
const buttonAdd = document.getElementById("btnAdicionar");
const item = document.getElementById("item");

function addItem() {
    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value.trim();

    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = "Completar";
    li.appendChild(btnCompletar);

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    li.appendChild(btnRemover);

    btnCompletar.addEventListener("click", function () {
        li.classList.toggle("completo");
    });

    btnRemover.addEventListener("click", function () {
        li.remove();
    });

    item.appendChild(li);
    input.value = "";
}

buttonAdd.addEventListener("click", addItem);