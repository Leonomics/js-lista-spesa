listaSpesa = ["pane", "uova", "pasta", "latte", "gelato", "mele", "pollo"];

let listElementsContainer = document.getElementById("listElementsContainer");
let i = 0;

while(i <= listaSpesa.length)	{
	element = listaSpesa[i];
	const li = `
	<li class="slide">
		<p>${element}<p>
	</li>
	`
	listElementsContainer.innerHTML += li;
	i++;
}