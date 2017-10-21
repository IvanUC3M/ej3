var deck = []; //Array con las posiciones de las cartas

//Metodos:
$(document).ready(function(){
	//Funciones de estilo:
	$("input").focus(function(){
		$(this).css("background-color", "#cccccc");
	});
	$("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
	
	//Función de inicio de juego:
	$("#play").click(function(){
		var N = $("#images").val();
		var timer = $("#timer").val();
		//Removemos imagenes de anteriores partidas:
		$( "img" ).remove();
		$( "br" ).remove();
		//Comprobamos que el tiempo esta en los parametros establecidos:
		if(timer < 10 || timer > 120){
			alert("Introduce un tiempo entre 10 y 120 segundos");
			return;
		}
		var x = 0;
		deck.length = 0;
		
		//Dibujamos las cartas y rellenamos el array de elementos, que estarán identificados por números:
		while ( x < N){
			//Usaremos el valor de la imagen como 0: parte trasera y 1: parte delantera
			var str = '<img id="' + x.toString() + '"src="images/back.png" alt="fondo" state value="0">'
			$("body").append(str);
			deck[deck.length]=x;
			x++;
		}
		x = 0;
		$("body").append('<br>');
		while ( x < N ){
			var str = '<img id="' + x.toString() + '"src="images/back.png" alt="fondo" state value="0">'
			$("body").append(str);
			deck[deck.length]=x;
			x++;
		}
		$("body").append('</br>');
		
		//Barajamos el deck de cartas (algoritmo Fisher-Yates):
		var indiceActual = deck.length;
		var valorTemporal; 
		var indiceAleatorio;
		while ( 0 != indiceActual ){
			indiceAleatorio = Math.floor(Math.random() * indiceActual);
			indiceActual -= 1;
			valorTemporal = deck[indiceActual];
			deck[indiceActual] = deck[indiceAleatorio];
			deck[indiceAleatorio] = valorTemporal;
		}
	});

	//Función de volteo de carta:
	$('body').on('click','img',function(){
		if ($(this).attr('value').includes("1")){
			return;
		}
		$(this).attr("value", "1");
		
		
	});
});
	