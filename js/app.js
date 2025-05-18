const agregarTareas = (e) => {
  e.preventDefault();
  // obtengo el valor del input
  const valueDelInput = document.getElementById("tareaInput").value;
  // obtengo al contenerdor padre
  const ul = document.querySelector(".list-group");
  // creo los elementos
  const li = document.createElement("li");
  const boton = document.createElement("button");
  // agrego su value
  li.textContent = valueDelInput;
  boton.textContent = "🗑";
  // agrego sus clases
  li.classList.add("list-group-item", "d-flex", "justify-content-between");
  boton.classList.add("btn", "btn-danger");
  // los agrego a su contenedor padre
  ul.appendChild(li);
  li.appendChild(boton);
  // agrego la funcioon de borrar el li al boton dianamico con una funcion anonnima en flecha
  boton.addEventListener("click", () => li.remove());
  // reseteo el formulario
  tareas.reset();
};

// variables
const tareas = document.getElementById("tareaForm");
// manejador de eventos
tareas.addEventListener("submit", agregarTareas);
