

var el = document.getElementById('btn-salvar');
var finalizar = document.querySelectorAll('h1')[1];
var finalizar2 = document.querySelectorAll('h1')[2];
var container = document.querySelector('.container');
var container2 = document.querySelector('.container2');
var fechar = document.querySelector('#btn-fechar');

container.style.display = 'block';
container2.style.display = 'none';

	
var obj = {
"SOFIA BANHO": 0.019,
"SOFIA ROSTO": 0.086,
"BAMBÚ BANHO": 0.021,
"BAMBÚ ROSTO": 0.010,
"GRÉCIA	BANHO": 0.018,
"GRÉCIA	ROSTO": 0.097,
"MÔNACO	BANHO": 0.017,
"MÔNACO	ROSTO": 0.085,
"FLORENÇA BANHO": 0.024,
"FLORENÇA ROSTO": 0.012,
"ROYAL BANHO": 0.025,
"ROYAL ROSTO": 0.010,
"PRO-LINE BANHO": 0.019,
"PRO-LINE ROSTO LISA": 0.018,
"ÉVORA BANHO": 0.018,
"ÉVORA	ROSTO": 0.011,
"MILÃO	BANHO": 0.016,
"MILÃO	ROSTO": 0.016,
"MILÃO 2 BANHO": 0.016,
"MILÃO 2 ROSTO": 0.016,
"HOTEL BANHO": 0,
"HOTEL ROSTO": 0,
"HOTEL PISO": 0,
"HOTEL 2 BANHO": 0,
"PRO-LINE D	BANHO LISA": 0.019,
"PRO-LINE D	ROSTO LISA": 0.018,
"PRO-LINE PISO": 0.019,
}



el.addEventListener("click", function() {
	var contador = localStorage.length;
	var contReal = contador + 1;

    var models = document.querySelector('.models').value;
    var select1 = document.querySelectorAll('select')[1].value;
    var select2 = document.querySelectorAll('select')[2].value;
    var peso = document.querySelector('#peso').value;
	
	if(select1 != '' || select2 != '' || peso != '') {
	function linear(tara) {
	 
	 let linear = document.querySelector('#linear');
	 var a = (select1 * tara) + 0.080;
	 var b = (peso - a) / select2;
	
	  linear.value = b.toFixed(3);
	 
	 const arr = [models, select1, select2, peso, b, a];
	 localStorage.setItem("model"+contador, arr);
	var tese = localStorage.getItem("model"+contador).split(',');
	};
	
	switch(models) {
		case 'SOFIA BANHO': 
		linear(0.019);
		break;
		case 'SOFIA ROSTO': 
		linear(0.086);
		break;
		case 'BAMBÚ BANHO': 
		linear(0.021);
		break;
		case 'BAMBÚ ROSTO': 
		linear(0.010);
		break;
		case 'GRÉCIA BANHO': 
		linear(0.018);
		break;
		case 'GRÉCIA ROSTO': 
		linear(0.097);
		break;
		case 'MÔNACO BANHO': 
		linear(0.017);
		break;
		case 'MÔNACO ROSTO': 
		linear(0.085);
		break;
		case 'FLORENÇA BANHO': 
		linear(0.024);
		break;
		case 'FLORENÇA ROSTO': 
		linear(0.012);
		break;
		case 'ROYAL BANHO': 
		linear(0.025);
		break;
		case 'ROYAL ROSTO': 
		linear(0.010);
		break;
		case 'PRO-LINE BANHO': 
		linear(0.019);
		break;
		case 'PRO-LINE ROSTO LISA': 
		linear(0.018);
		break;
		case 'ÉVORA BANHO': 
		linear(0.018);
		break;
		case 'ÉVORA BANHO': 
		linear(0.011);
		break;
		case 'MILÃO BANHO': 
		linear(0.016);
		break;
		case 'MILÃO	ROSTO': 
		linear(0.016);
		break;
		case 'MILÃO 2 BANHO': 
		linear(0.016);
		break;
		case 'MILÃO 2 ROSTO': 
		linear(0.016);
		break;
		case 'HOTEL BANHO': 
		linear(0);
		break;
		case 'HOTEL ROSTO': 
		linear(0);
		break;
		case 'HOTEL PISO': 
		linear(0);
		break;
		case 'HOTEL 2 BANHO': 
		linear(0);
		break;
		case 'PRO-LINE D BANHO LISA': 
		linear(0.019);
		break;
		case 'PRO-LINE D ROSTO LISA': 
		linear(0.018);
		break;
		case 'PRO-LINE PISO': 
		linear(0.019);
		break;
		 default:
		 console.log("erro");
	};
	
	} else {
		alert("Por favor preencha todos os campos!")
	}
	

	
});



finalizar.addEventListener("click", function() {
	    container.style.display = 'none';
		container2.style.display = 'block'
	
});

finalizar2.addEventListener("click", function() {
	container.style.display = 'block';
	container2.style.display = 'none';
	
});

fechar.addEventListener("click", function() {
	localStorage.clear();
	location.reload();
	
});

function tabela(a, b, c, d, e, f) {
const tbody = document.createElement('tbody');
const tr = document.createElement('tr');
const td0 = document.createElement('td');
const td = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
const td4 = document.createElement('td');
const td5 = document.createElement('td');



tbody.appendChild(tr);

tr.appendChild(td0);
tr.appendChild(td);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);


td0.innerHTML = a;
td.innerHTML = b;
td2.innerHTML = c;
td3.innerHTML = d;
td4.innerHTML = e;
td5.innerHTML = f;



document.querySelector('table').appendChild(tbody);

}

const array1 = [];
const array2 = [];
const array3 = [];
const array4 = [];
const array5 = [];
const array6 = [];

for(let i = 0; i < localStorage.length; i++) {
  var tese = localStorage.getItem("model"+i).split(',');
  
  
  
  
  tabela(tese[0], tese[5], tese[1], tese[2], tese[3], tese[4]);
  
  array1.push(parseFloat(tese[0]));
  array2.push(parseFloat(tese[1]));
  array3.push(parseFloat(tese[2]));
  array4.push(parseFloat(tese[3]));
  array5.push(parseFloat(tese[4]));
  array6.push(parseFloat(tese[5]));
  
}

function result() {
const tbody = document.createElement('tbody');
const tr = document.createElement('tr');
const td_total_modelo = document.createElement('td');
const td_total_tara = document.createElement('td');
const td_total_volumes = document.createElement('td');
const td_total_quant = document.createElement('td');
const td_total_peso = document.createElement('td');
const td_total_linear = document.createElement('td');

var arrayD1 = array1.reduce((total, num) => total + num, 0);
var arrayD2 = array2.reduce((total, num) => total + num, 0);
var arrayD3 = array3.reduce((total, num) => total + num, 0);
var arrayD4 = array4.reduce((total, num) => total + num, 0);
var arrayD5 = array5.reduce((total, num) => total + num, 0);
var arrayD6 = array6.reduce((total, num) => total + num, 0);

tbody.appendChild(tr);
tr.appendChild(td_total_modelo);
tr.appendChild(td_total_tara);
tr.appendChild(td_total_volumes);
tr.appendChild(td_total_quant);
tr.appendChild(td_total_peso);
tr.appendChild(td_total_linear);

td_total_modelo.innerHTML = "-----";
td_total_tara.innerHTML = arrayD6;
td_total_volumes.innerHTML = arrayD2;
td_total_quant.innerHTML = arrayD3;
td_total_peso.innerHTML = arrayD4;
td_total_linear.innerHTML = arrayD5.toFixed(3);

document.querySelector('table').appendChild(tbody);

}

result();