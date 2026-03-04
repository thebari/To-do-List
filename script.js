const input = document.getElementById("input");
const buttonAdd = document.getElementById("btnAdicionar");
const list = document.getElementById("list");
const form = document.getElementById("form-group");

function addItem() {
  event.preventDefault();
  if (input.value.trim() === "") {
    return;
  } else {
    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.textContent = input.value.trim();
    li.appendChild(span);

    const btnCompletar = document.createElement("button");
    btnCompletar.innerHTML = '<i class="fas fa-check"></i>';
    li.appendChild(btnCompletar);

    const btnRemover = document.createElement("button");
    btnRemover.innerHTML = '<i class="fas fa-trash"></i>';
    li.appendChild(btnRemover);


    btnCompletar.addEventListener("click", function () {
      span.classList.toggle("completo");
    });

    btnRemover.addEventListener("click", function () {
      li.remove();
    });

    list.appendChild(li);
    input.value = "";
  }
}

buttonAdd.addEventListener("click", addItem);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  addItem();
});