function etiquetaA(){
	var eleA = document.getElementsByTagName("a"); 
	//En vez de hacer un for se pude poner ".length" al final de la var eleA
	var contador = 0;
	
	for(var i = 0; i < eleA.length; i++){
		contador++;
	}


	document.getElementById("num_enlaces").innerHTML = "<b>Existen " + contador + " etiquetas 'a' <b>";
}
etiquetaA();

