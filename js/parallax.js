(function(){

	//Propiedades
	var propParallax = {

		seccion: document.querySelector('.parallax'),
		recorrido: null,
		limite: null

	}


	//Metodos
	var metParallax = {
		inicio: function () {
			window.addEventListener('scroll', metParallax.parallax);
		},

		parallax: function () {
			propParallax.recorrido = pageYOffset; 
			propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

			if (propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite){
				propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 3 + 'px';
			}

			else{
				propParallax.seccion.style.backgroundPositionY = 0;
			}
		}
	}

	metParallax.inicio();
	
}())
