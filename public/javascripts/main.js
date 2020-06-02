const verificar = document.getElementById("verificar");
const matricula = document.getElementById("matricula");

verificar.addEventListener("click", (event) => {
	if (matricula.value.length < 9) {
		alert("matricula incorreta");
		event.preventDefault();
    }
});