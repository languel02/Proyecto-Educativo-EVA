const STORAGE_KEY = 'eva_posts_v1';

function loadPosts() {
	const raw = localStorage.getItem(STORAGE_KEY);
	let posts = [];
	try { posts = raw ? JSON.parse(raw) : []; } catch (e) { posts = []; }
	if (!posts || posts.length === 0) {
		posts = [
			{author: 'Profesor', text: 'Bienvenidos al foro del curso. Presenta tu nombre y tus expectativas.', time: Date.now() - 86400000},
			{author: 'María', text: '¿Alguien tiene ejemplos de gamificación aplicados en primaria?', time: Date.now() - 7200000}
		];
		localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
	}
	return posts;
}

function savePosts(posts){
	localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

function render(){
	const lista = document.getElementById('lista');
	if (!lista) return;
	lista.innerHTML = '';
	const posts = loadPosts();
	posts.slice().reverse().forEach(p => {
		const li = document.createElement('li');
		const meta = document.createElement('div');
		meta.className = 'post-meta';
		meta.textContent = `${p.author} • ${new Date(p.time).toLocaleString()}`;
		const text = document.createElement('div');
		text.textContent = p.text;
		li.appendChild(meta);
		li.appendChild(text);
		lista.appendChild(li);
	});
}

function publicar(){
	const comentarioEl = document.getElementById('comentario');
	if (!comentarioEl) return;
	const text = comentarioEl.value.trim();
	if (!text) { alert('Escribe un comentario antes de publicar.'); comentarioEl.focus(); return; }
	const usuario = localStorage.getItem('usuario') || 'Invitado';
	const posts = loadPosts();
	posts.push({author: usuario, text: text, time: Date.now()});
	savePosts(posts);
	comentarioEl.value = '';
	render();
}

document.addEventListener('DOMContentLoaded', function(){ render(); });