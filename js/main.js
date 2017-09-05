$(document).ready(function(){
	creaPortfolio();
	creaTeam();

	$(window).scroll(function(){
		if ($("#navHeader").offset().top > 0) {
	      $("#navHeader").addClass("navFondo");
	      $(".nav").addClass("navfondo");
	    } else {
	      $("#navHeader").removeClass("navFondo");
	      $(".nav").removeClass("navfondo");
	    }
	});

	iniciar();
});

var imagenesP = ['img/roundicons.png', 'img/startup-framework.png', 'img/treehouse.png', 'img/golden.png', 'img/escape.png', 'img/dreams.png'];
var text = [ 'Round Icons', 'Strarup Framework', 'Treehouse', 'Golden', 'Escape', 'Dreams']
var portfolio = $('#img-portfolio');

var imagenesTeam = ['img/t1.jpg', 'img/t2.jpg', 'img/t3.jpg'];
var nameTeam = ['Kay Garland', 'Larry Parker', 'Diana Pertersen'];
var cargoTeam = ['Lead Developer', 'Lead Marketer', 'Lead Developer'];
var team = $('#img-team');


//crea lasimagenes del portafolio
function creaPortfolio(){
	for (var i = 0; i < imagenesP.length; i++) {
		var divPortforlio = document.createElement('div');
			divPortforlio.setAttribute('class','col-md-4 pd-10');
		var divPPort = document.createElement('div');
			divPPort.setAttribute('class','bg-color-0');
		var imgP = document.createElement('img');
			imgP.setAttribute('class','img-responsive');
			imgP.src = imagenesP[i];
		var divText = document.createElement('div');
			divText.innerHTML =("<p class='font-Mont'><b>"+text[i]+"</b></p><p><em>Website Design</em></p>");

		divPPort.appendChild(imgP);
		divPPort.appendChild(divText);
		divPortforlio.appendChild(divPPort);
		portfolio.append(divPortforlio);
	}
}
//crea lasimgenes Team
function creaTeam(){
	for (var i = 0; i < imagenesTeam.length; i++) {
		var divTeam = document.createElement('div');
			divTeam.setAttribute('class','col-md-4 pd-10');
		var imgT = document.createElement('img');
			imgT.setAttribute('class', 'img-circle');
			imgT.src = imagenesTeam[i];
		var divTextTeam = document.createElement('div');
			divTextTeam.innerHTML = "<p class='font-Mont'><b>"+nameTeam[i]+"</b></p><p><em>"+cargoTeam[i]+"</em></p>";
		var divIconos = document.createElement('div');
		var iconoT = document.createElement('i');
			iconoT.setAttribute('class','fa fa-twitter color-0 bg-color-4');
		var iconoF = document.createElement('i');
			iconoF.setAttribute('class','fa fa-facebook color-0 bg-color-4 pd-lr-30');
		var iconoI = document.createElement('i');
			iconoI.setAttribute('class','fa fa-linkedin color-0 bg-color-4');

		divIconos.appendChild(iconoT);
		divIconos.appendChild(iconoF);
		divIconos.appendChild(iconoI);
		divTeam.appendChild(imgT);
		divTeam.appendChild(divTextTeam);
		divTeam.appendChild(divIconos);
		team.append(divTeam);
	}
}

//Validacion del formulario
function iniciar(){
	$('span.help-block').hide();
	$('#enviar').click(validacion);
}

function validacion(){
	validarName();
}

/*VALIDACION NOMBRE*/
function validarName(){
var name = document.getElementById('name').value;
	if( name == null || name.length == 0 || /^\s+$/.test(name) ) {
	  $('#name').parent().attr('class','form-group has-error');
	  $('#name').parent().children('span').text('Debe ingresar algun caracter').show();  
	  return false;
	}else if( !(/^\d{2}[A-Z]$/.test(name)) ) {
	  $('#name').parent().attr('class','form-group has-error');
	  $('#name').parent().children('span').text('Debe ingresar solo letras').show();  
	  return false;
	}
}