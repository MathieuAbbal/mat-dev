//modale header
let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
	collapse.classList.toggle("hidden");
	collapse.classList.toggle("flex");
};
//affiche année en cour
var today = new Date();
var annee = today.getFullYear();
var sannee = document.getElementById('s_annee');
sannee.innerHTML = annee;

//mode sombre
if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	document.querySelector('html').classList.add('dark')
} else if (localStorage.theme === 'dark') {
	document.querySelector('html').classList.add('dark')
}
document.getElementById('toggle').addEventListener('click', function () {
	let htmlClasses = document.querySelector('html').classList;
	if (localStorage.theme == 'dark') {
		htmlClasses.remove('dark');
		localStorage.removeItem('theme')
	} else {
		htmlClasses.add('dark');
		localStorage.theme = 'dark';
	}
});
//bouton scroll 
//Récupère le btn
const back2Top = document.querySelector('#back2Top');
back2Top.addEventListener('click', (e) => {
	e.preventDefault();
	window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});
//Lorsque l'utilisateur fait défiler 20px du haut du document vers le bas
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		back2Top.style.display = "block";
	} else {
		back2Top.style.display = "none";
	}
}
window.onscroll = function () { scrollFunction() };



