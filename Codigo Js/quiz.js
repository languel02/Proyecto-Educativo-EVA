function calcular(){
	const formulario = document.getElementById('quizForm');
	if (!formulario) return;
	const respuestas = formulario.querySelectorAll('input[type=radio]:checked');
	let puntaje = 0;
	respuestas.forEach(r => { puntaje += parseInt(r.value) || 0; });
	const resultadoEl = document.getElementById('resultado');
	resultadoEl.textContent = `Puntuación obtenida: ${puntaje} / 3`;
	localStorage.setItem('eva_score', puntaje);
	if (puntaje >= 2){
		resultadoEl.textContent += ' — Aprobado. Generando certificado...';
		setTimeout(() => { window.location.href = 'certificado.html'; }, 900);
	} else {
		resultadoEl.textContent += ' — Necesitas repasar algunos temas.';
	}
}