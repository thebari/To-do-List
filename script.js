const input = document.getElementById("input");
const buttonAdd = document.getElementById("btnAdicionar");
const list = document.getElementById("list");

function addItem() {
  if (input.value.trim() === "") {
    return;
  }else{

  const li = document.createElement("li");
  li.textContent = input.value.trim();

  const btnCompletar = document.createElement("button");
  btnCompletar.innerHTML = '<i class="fas fa-check"></i>';
  li.appendChild(btnCompletar);

  const btnRemover = document.createElement("button");
  btnRemover.innerHTML = '<i class="fas fa-trash"></i>';
  li.appendChild(btnRemover);

  btnCompletar.addEventListener("click", function () {
    li.classList.toggle("completo");
  });

  btnRemover.addEventListener("click", function () {
    li.remove();
  });

  list.appendChild(li);
  input.value = "";
  }
}

buttonAdd.addEventListener("click", addItem);
