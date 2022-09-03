var el = document.getElementById('btn-salvar');
el.addEventListener("click", function() {
    console.log(document.querySelector('.models').value);
    console.log(document.querySelectorAll('select')[1].value);
    console.log(document.querySelectorAll('select')[2].value);
    console.log(document.querySelector('#peso').value);
});

