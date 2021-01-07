(function(){

	//Propiedades
	var propSlider = {
		slider: document.getElementById('slider'),
		primeraImagen: null
	}


	//Métodos
	var metSlider = {
		inicio: function() {
			setInterval(metSlider.moverImagen, 4000);
		},

		moverImagen: function () {
			propSlider.slider.style.transition = 'all 1s ease';
			propSlider.slider.style.marginLeft = '-100%';

			setTimeout(function(){
				propSlider.primeraImagen = propSlider.slider.firstElementChild;
				propSlider.slider.appendChild(propSlider.primeraImagen);
				propSlider.slider.style.transition = 'unset'; //para pasar la primera foto al final sin usar transicion
				propSlider.slider.style.marginLeft = '0';
			}, 1000);

		}
	}

	metSlider.inicio();

}())
