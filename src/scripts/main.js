document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('dividir-form').addEventListener('submit', function(evento) {
            evento.preventDefault();
            let numeroDIVISAO = document.getElementById('dividir-numero').value;
            numeroDIVISAO = parseInt(numeroDIVISAO);

            let contaDIVISAO = numeroDIVISAO / 2;

            document.getElementById('resultado-valor').innerText = contaDIVISAO;
            document.querySelector('.resultado').style.display = 'block';
        })

})
