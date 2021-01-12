(function (){
	
	//Propiedades
	var propMenu = {
		burger: document.getElementById('burger-menu'),
		slide: document.getElementById('slide-menu'),
		elementosMenu: document.querySelectorAll('#slide-menu .menu-principal a'),
		menuActivo: false
	}

	//Metodos
	var metMenu = {
		inicio: function () {
			propMenu.burger.addEventListener('click', metMenu.mostrarMenu);

			for (var i = 0; i < propMenu.elementosMenu.length; i++) {
				propMenu.elementosMenu[i].addEventListener('click', metMenu.ocultarMenu);
			}
		},

		mostrarMenu: function () {
			if (propMenu.menuActivo == false) {
				propMenu.menuActivo = true;
				propMenu.slide.className = 'slide-menu active';
			}

			else {
				propMenu.menuActivo = false;
				propMenu.slide.className = 'slide-menu';
			}
		},

		ocultarMenu: function () {
			propMenu.menuActivo = false;
			propMenu.slide.className = 'slide-menu';
		}
	}

	metMenu.inicio();

}())