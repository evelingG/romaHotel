(function(){

	// Propiedades de tabs
	var propTabs = {
		titulos: document.getElementById('tipo-habitacion').firstElementChild,
		tipo_habitacion: document.getElementById('detalle-habitacion').firstElementChild,
		enlaces_titulos: document.querySelectorAll('#tipo-habitacion li a'),
		li_titulos: document.querySelectorAll('#tipo-habitacion li'),
		div_habitacion: document.querySelectorAll('#detalle-habitacion > div'),
		activo: null
	}

	// Metodos de tabs
	var metTabs = {
		inicio: function () {
			propTabs.titulos.className = 'active';
			propTabs.tipo_habitacion.className = 'active';

			for (var i = 0; i < propTabs.enlaces_titulos.length; i++) {
				propTabs.enlaces_titulos[i].addEventListener('click', metTabs.selec_titulo);
			}
		},

		selec_titulo: function (e) {
			e.preventDefault();

			for (var i = 0; i < propTabs.li_titulos.length; i++) {
				propTabs.li_titulos[i].className = '';
			}

			for (var i = 0; i < propTabs.div_habitacion.length; i++) {
				propTabs.div_habitacion[i].className = '';
			}

			this.parentElement.className = 'active';
			propTabs.activo = this.getAttribute('href');
			document.querySelector(propTabs.activo).className = 'active';
			document.querySelector(propTabs.activo).style.opacity = '0';
			setTimeout(function() {
				document.querySelector(propTabs.activo).style.opacity = '1';
			},100)
		}
	}

	metTabs.inicio();
	
}())
