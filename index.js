//modale header
let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};
//affiche année en cour
var today=new Date();
		var annee = today.getFullYear();
		var sannee = document.getElementById('s_annee');
		sannee.innerHTML = annee;

//mode sombre
if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	document.querySelector('html').classList.add('dark')
} else if (localStorage.theme === 'dark') {
	document.querySelector('html').classList.add('dark')
}
document.getElementById('toggle').addEventListener('click', function() {
	let htmlClasses = document.querySelector('html').classList;
	if(localStorage.theme == 'dark') {
		htmlClasses.remove('dark');
		localStorage.removeItem('theme')
	} else {
		htmlClasses.add('dark');
		localStorage.theme = 'dark';
	}
});


