listaSpesa = ["pane", "uova", "pasta", "latte", "gelato", "mele", "pollo"];

let listElementsContainer = document.getElementById("listElementsContainer");

for (let i = 0; i < listaSpesa.length; i++) {

    element = listaSpesa[i];
    const li = `
	<li class="slide">
		<p>${element}<p>
	</li>
	`
   listElementsContainer.innerHTML += li;

}