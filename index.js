let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let consulta = document.getElementById("consulta");
let btn = document.getElementById("submit");
let enviado = document.getElementById("enviado");
let error = document.getElementById("error");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    if(nombre.value && apellido.value && email.value && consulta.value) {
        error.style.display = "none";
        enviado.style.display = "block";
    } else {
        error.style.display = "block";
    }
});
