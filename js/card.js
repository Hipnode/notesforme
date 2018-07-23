function addFunctionsToCard(card){
	
	const card_opts = card.firstChild;

	card.onmouseover = function(){
		card_opts.classList.add('visible');
	}

	card.onmouseout = function(){
		card_opts.classList.remove('visible');
	}

	card_opts.onclick = function(event){

		const element = event.target;

		if( element.classList.contains('color') ){

			const color = element.getAttribute('data-color');
			card
			.style
			.background = color;

		}else if( element.classList.contains('btnRemove'))
			card.remove();
		else{
			
			const cardContentArea = card.querySelector('.card-content'),
			      cardContent = card.querySelector('P'),
			      txtAreaEdit = document.createElement("textarea"),
			      btnEdit = document.createElement("INPUT");

			txtAreaEdit.type = "textarea";
			txtAreaEdit.className = "txtAreaEditContent";
			txtAreaEdit.value = cardContent.textContent;

			btnEdit.type = "button";
			btnEdit.className = "btnEditContent";
			btnEdit.value = "Edit";

			cardContent.remove();

			cardContentArea.insertAdjacentElement('beforeend', txtAreaEdit);
			cardContentArea.insertAdjacentElement('beforeend', btnEdit);

			btnEdit.onclick = function(){
				const newP = document.createElement("P");

				newP.textContent = txtAreaEdit.value;

				txtAreaEdit.remove();
				btnEdit.remove();

				cardContentArea.appendChild(newP);

			}
		}
	}

}

