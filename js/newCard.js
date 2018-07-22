const tasksArea  = document.querySelector('.tasksArea');
const btnAddTask = document.querySelector('.btnAdd');


btnAddTask.onclick = function(){

	const textArea = document.querySelector('.task');
	
	const card = "<div class='card'>"+
	"<div class='card-options'>"+	
	"<div class='btnRemove'>&times;</div>"+
	"<div class='btnEdit'><i class='fa fa-edit'></i></div>"+
	"<div class='color' data-color='#f1c40f'></div>"+
	"<div class='color' data-color='#2ecc71'></div>"+
	"<div class='color' data-color='#e74c3c'></div>"+
	"</div>"+
	"<div class='card-content'>"+
	"<p>"+textArea.value+"</p>"+
	"</div>"+	
	"</div>";
	
	
	tasksArea.insertAdjacentHTML('beforeend', card);	
	loadCardFunctions();

}