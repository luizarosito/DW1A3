var box_preview = document.getElementById("box-preview");

var input_top_l = document.getElementById("input-top-l");
var input_top_r = document.getElementById("input-top-r");
var input_bottom_r = document.getElementById("input-bottom-r");
var input_bottom_l = document.getElementById("input-bottom-l");

var btn_copiar = document.getElementById("btn-copiar");

var btn_igualar = document.getElementById("btn-igualar");

input_top_l.onchange = atualizarPreview;
input_top_r.onchange = atualizarPreview;
input_bottom_r.onchange = atualizarPreview;
input_bottom_l.onchange = atualizarPreview;

btn_copiar.onclick = copiarPropriedade;

btn_igualar.onclick = igualarBordas;

function atualizarPreview(){
	validarCampos();

	var propriedade = "border-radius: " + 
		input_top_l.value + "px " + input_top_r.value + "px " + 
		input_bottom_r.value + "px " + input_bottom_l.value + "px;";

	console.log("Propriedade: " + propriedade);

	document.getElementById("input-prop").value = propriedade;

	box_preview.style = propriedade;
}

function validarCampos(){
	var inputs = [
		input_top_l,
		input_top_r,
		input_bottom_r,
		input_bottom_l
	];
	for(valor of inputs){
		if(valor.value.length === 0 || valor.value < 0)
			valor.value = 0;
		else if(valor.value > 150)
			valor.value = 150;
	}
}

function copiarPropriedade(){
	var inputProp = document.getElementById("input-prop");
	if(inputProp.value.length === 0) return;

	inputProp.select();
	inputProp.setSelectionRange(0, 99999);
	document.execCommand("copy");
	alert("Propriedade copiada: " + inputProp.value);
}

function igualarBordas(){
	validarCampos();

	var valor_base = input_top_l.value;

	input_top_r.value = valor_base;
	input_bottom_r.value = valor_base;
	input_bottom_l.value = valor_base;

	atualizarPreview();
}