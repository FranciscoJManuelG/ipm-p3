
function ocultar(){
	document.getElementById('p2').style.display = 'none';
	var nombre2 = document.querySelector("input[name = name2]");
	var ap2 = document.querySelector("input[name = surname2]");
	nombre2.value = " ";	
	ap2.value= " ";
}

function mostrar(){
	document.getElementById('p2').style.display = 'block';
	var nombre2 = document.querySelector("input[name = name2]");
	var ap2 = document.querySelector("input[name = surname2]");
	nombre2.value = null;	
	ap2.value= null;
}

function showHideInput(sel) {
	var value = sel.value;
	
	if(value=="Parejas")
		mostrar();	
	if(value=="Individual")
		ocultar();			
}

function puntuacionValida(){
	var pointDifficult = document.getElementById("difficult").value;
	var pointExecution = document.getElementById("exec").value;
	var pointEsthetic = document.getElementById("est").value;

	if(pointDifficult > 7 || pointExecution > 7 || pointEsthetic > 7){
		return false;
	} else {
		return true;
	}

}
function calcular() {
	var a=parseFloat(document.getElementById("difficult").value),
		b=parseFloat(document.getElementById("exec").value),
		c=parseFloat(document.getElementById("est").value);

	var resultado=a+b+c;

	if (isNaN(resultado)){
		document.getElementById("error").innerHTML="Introduzca todas las puntuaciones";
		document.getElementById("point").innerHTML="-";
	}else if (puntuacionValida()){
		document.getElementById("point").innerHTML=resultado;
		document.getElementById("error").innerHTML="";
	}else{
		document.getElementById("error").innerHTML="Introduzca correctamente las puntuaciones.<br> La puntución máxima es 7";
		document.getElementById("point").innerHTML="-";
	}
	return false;
	
}

function validar() {
	var name1, name2, surname1, surname2, pointDifficult, pointExecution, pointEsthetic; 
	
	name1 = document.getElementById("name1").value;
	name2 = document.getElementById("name2").value;
	surname1 = document.getElementById("surname1").value;
	surname2 = document.getElementById("surname2").value;
	pointDifficult = document.getElementById("difficult").value;
	pointExecution = document.getElementById("exec").value;
	pointEsthetic = document.getElementById("est").value;

	if (name1==="" || name2 ==="" || surname1 ==="" || surname2 ==="" || pointDifficult ==="" || pointExecution ==="" || pointEsthetic ==="") {
		document.getElementById("error").innerHTML="Todos los campos son obligatorios";
		return false;
	}
}

function createEventListeners() {
	var name1, name2, surname1, surname2, date, pointDifficult, pointExecution, pointEsthetic
	
	var menu = document.getElementById("menu-bar")
	name1 = document.getElementById("name1");
	name2 = document.getElementById("name2");
	surname1 = document.getElementById("surname1");
	surname2 = document.getElementById("surname2");
	date = document.getElementById("date");
	pointDifficult = document.getElementById("difficult");
	pointExecution = document.getElementById("exec");
	pointEsthetic = document.getElementById("est");

	menu.onclick = function(){
		var change = document.getElementById("menu").getAttribute("aria-expanded")
		if (change === "false"){
        	document.getElementById("menu").setAttribute("aria-expanded", "true");
		}else{
			document.getElementById("menu").setAttribute("aria-expanded", "false");
		}
	}

	name1.onblur = function() {
      if (this.value == '') {
        document.getElementById("errorName1").innerText='El nombre del participante 1 es un campo obligatorio';
      }
    }

    surname1.onblur = function() {
      if (this.value == '') {
        document.getElementById("errorSurname1").innerText='Los apellidos del participante 1 es un campo obligatorio';
      }
    }

    name2.onblur = function() {
      if (this.value == '') {
        document.getElementById("errorName2").innerText='El nombre del participante 2 es un campo obligatorio';
      }
    }

    surname2.onblur = function() {
      if (this.value == '') {
        document.getElementById("errorSurname2").innerText='Los apellidos del participante 2 es un campo obligatorio';
      }
    }

    date.onblur = function() {
      if (this.value == '') {
        document.getElementById("errorDate").innerText='La fecha es un campo obligatorio';
      }
    }   
}


window.onload = function(){
	var select = document.getElementById("cat")
	var points = document.getElementById("totalPoints")
	var save = document.getElementById("save")

	select.onchange = function(){
		showHideInput(select);
	}

	points.onclick = function(){
		return calcular();
	}

	save.onclick = function(){
		return validar();
	}

	createEventListeners();
}

