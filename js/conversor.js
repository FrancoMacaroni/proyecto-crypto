let monedas = [{ nombre: 'Peso Argentino', valor: 1, id: '1' }, 
               { nombre: 'Bitcoin', valor: 4748150.42, id: '2' },
               { nombre: 'litecoin', valor: 18587.42, id: '3' },
               { nombre: 'Ethereum', valor: 355767.17, id: '4' },
               { nombre: 'Cardano', valor: 240.92, id: '5' },
               { nombre: 'XRP', valor: 108.17, id: '6' },
               { nombre: 'Dogecoin', valor: 23.61, id: '7' },
            ]

function convertir() {
    // Se guarda el valor colocado en el input
    var input = parseFloat(document.getElementById("cantidad").value);
    // Aca obtengo los ids de cada checkbox
    var id1 = document.getElementById("monedaDeOrigen").value;
    var id2 = document.getElementById("monedaDeDestino").value;
    // Busco las monedas que tengan los mismos ids a los obtenidos arriba
    const monedaDeOrigen = monedas.find(moneda => moneda.id === id1);
    const monedaDeDestino = monedas.find(moneda => moneda.id === id2);
    // guardo en una variable su valor
    let valor1 = monedaDeOrigen.valor;
    let valor2 = monedaDeDestino.valor;
    // ejecuto la operacion
    let resultado = input * (valor1 / valor2);


    const botonConvertir = document.querySelector('button');
    botonConvertir.addEventListener('click', function () {
        document.getElementById("resultado").innerHTML = "$" + resultado.toFixed(8);
    })

    document.getElementById("animation").animate([

        { transform: 'translatex(0px' },
        { transform: 'translatex(30px' },
        { transform: 'translatex(0px' },
    ], {
        duration: 2000,
        iterations: Infinity
    });


    $("button").hover(function() {
        $(this).css("background-color","#20509e");
        },
        function() {
        $(this).css("background-color","white");
        });
}

