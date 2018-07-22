function loadCardFunctions(){

	const cards = document.querySelectorAll('.card');

	for( i = 0; i < cards.length; i++){
		const card_opts = cards[i].querySelector('.card-options');

		cards[i].onmouseover = function(){
			card_opts.classList.add('visible');

		}

		cards[i].onmouseout  = function(){
			card_opts.classList.remove('visible');
		}

		card_opts.onclick = function(event){
			
			const element = event.target;
			if( element.classList.contains('color') ){
				const color = element.getAttribute('data-color');
				element
				.parentNode
				.parentNode
				.style
				.background = color;
			}else if( element.classList.contains('btnRemove')){
				element
				.parentNode
				.parentNode
				.remove();

			}else{
				alert('Editando...');
			}
		}
	}
}