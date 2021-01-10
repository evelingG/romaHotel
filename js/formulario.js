(function() {
	
	//Propiedades
	var propFormulario = {
		formulario: document.form_contacto,
		elementos: document.form_contacto.elements,
		parrafo: null,
		textoError: null
	}


	//Metodos
	var metFormulario = {
		inicio: function () {
			for (var i = 0; i < propFormulario.elementos.length; i++) {
				
				if (propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].type == 'tel' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea') {
					
					propFormulario.elementos[i].addEventListener('focus', metFormulario.focusForm);
					
					propFormulario.elementos[i].addEventListener('blur', metFormulario.blurForm);
				}
			}

			propFormulario.formulario.addEventListener('submit', metFormulario.submit);
		},

		focusForm:function () {
			this.parentElement.children[1].className = 'label active';
		},

		blurForm:function () {
			if (this.value == '') {
				this.parentElement.children[1].className = 'label';
			}
		},

		submit: function (e) {

			for (var i = 0; i < propFormulario.elementos.length; i++) {
				
				if (propFormulario.elementos[i].value == '') {
					e.preventDefault();

					if (propFormulario.elementos[i].parentElement.children.length < 3) {
						propFormulario.parrafo = document.createElement('p');
						propFormulario.textoError = document.createTextNode('*Rellene este campo con su ' + propFormulario.elementos[i].name);
						propFormulario.parrafo.appendChild(propFormulario.textoError);
						propFormulario.parrafo.className = 'error';

						propFormulario.elementos[i].parentElement.appendChild(propFormulario.parrafo);
					}
				}

				else{
					if (propFormulario.elementos[i].parentElement.children.length >= 3) {
						propFormulario.parrafo = propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0];
						propFormulario.elementos[i].parentElement.removeChild(propFormulario.parrafo);
					}
				}
			}
		}

	}

	metFormulario.inicio();

}())
