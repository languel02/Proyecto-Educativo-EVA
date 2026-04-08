function login() {
	const usuarioInput = document.getElementById("usuario");
	if (!usuarioInput) return;
	const usuario = usuarioInput.value.trim();
	if (usuario === "") {
		alert("Ingrese su nombre");
		usuarioInput.focus();
		return;
	}
	localStorage.setItem("usuario", usuario);
	window.location.href = "dashboard.html";
}