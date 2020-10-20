document.addEventListener('scroll', timeline);

function timeline() {
	var position = window.scrollY + window.innerHeight * 2/3;
	var event = document.querySelectorAll('.timeline li');
	for(i in event){
		if(event[i].offsetTop < position) {
			event[i].classList.add('visible'); } 
		else {
			event[i].classList.remove('visible'); } } }
			
timeline();