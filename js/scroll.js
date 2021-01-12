(function () {
	
	//Propiedades
	var propScroll = {
		posicion: window.pageYOffset,
		scroll: document.getElementsByClassName('scroll'),
		arriba: document.getElementsByClassName('arriba'),
		destino: null,
		seccion: null,
		intervalo: null,
		flecha: document.getElementsByClassName('bajar')
	}


	//Metodos
	var metScroll = {
		inicio: function () {
			for (var i = 0; i < propScroll.scroll.length; i++) {
				propScroll.scroll[i].addEventListener('click', metScroll.moverse);
			}

			for (var i = 0; i < propScroll.arriba.length; i++) {
				propScroll.arriba[i].addEventListener('click', metScroll.volverArriba);
			}

			for (var i = 0; i < propScroll.flecha.length; i++) {
				propScroll.flecha[i].addEventListener('click', metScroll.moverse);
			}
			
		},

		moverse: function (e) {
			e.preventDefault();
			clearInterval(propScroll.intervalo);

			propScroll.destino = this.getAttribute('href');
			propScroll.seccion = document.querySelector(propScroll.destino).offsetTop - 61;

			propScroll.posicion = window.pageYOffset;
			propScroll.intervalo = setInterval(function () {
				
				if ( propScroll.posicion < propScroll.seccion) {
					propScroll.posicion += 30;

					if ( propScroll.posicion >= propScroll.seccion ) {
						clearInterval(propScroll.intervalo);
					}
				}

				else{
					propScroll.posicion -= 30;
					if ( propScroll.posicion <= propScroll.seccion ) {
						clearInterval(propScroll.intervalo);
					}
				}

				window.scrollTo(0, propScroll.posicion);

			}, 15);	
		},

		volverArriba: function (e) {
			e.preventDefault();
			clearInterval(propScroll.intervalo);

			propScroll.posicion = window.pageYOffset;
			propScroll.intervalo = setInterval(function () {
				
				if ( propScroll.posicion > 0) {
					propScroll.posicion -= 30;

					if ( propScroll.posicion <= 0 ) {
						clearInterval(propScroll.intervalo);
					}
				}

				else{
					return;
				}

				window.scrollTo(0, propScroll.posicion);

			}, 15);
		}
	}

	metScroll.inicio();

}())