/* =====================================================
   DESTINOS
===================================================== */


/*
    Coordenadas de los destinos.

    IMPORTANTE:
    Las coordenadas que figuran aquí son
    provisionales.

    Luego podemos colocar las coordenadas
    reales de cada sector de Polo Oeste.
*/


const destinos = [

    {
        nombre: "Emergent",
        lat: -34.000000,
        lng: -56.000000
    },


    {
        nombre: "Conaprole",
        lat: -34.001000,
        lng: -56.001000
    },


    {
        nombre: "Integra",
        lat: -34.002000,
        lng: -56.002000
    },


    {
        nombre: "Sodimac Vasa",
        lat: -34.003000,
        lng: -56.003000
    },


    {
        nombre: "Centro de verificación",
        lat: -34.004000,
        lng: -56.004000
    },


    {
        nombre: "Mezzanine",
        lat: -34.005000,
        lng: -56.005000
    },


    {
        nombre: "Integra 2",
        lat: -34.006000,
        lng: -56.006000
    },


    {
        nombre: "Oficinas Polo Oeste",
        lat: -34.007000,
        lng: -56.007000
    },


    {
        nombre: "Unilever",
        lat: -34.008000,
        lng: -56.008000
    },


    {
        nombre: "Mondelez",
        lat: -34.009000,
        lng: -56.009000
    },


    {
        nombre: "H&M",
        lat: -34.010000,
        lng: -56.010000
    },


    {
        nombre: "Pepsico",
        lat: -34.011000,
        lng: -56.011000
    },


    {
        nombre: "Vehículos",
        lat: -34.012000,
        lng: -56.012000
    }

];



/* =====================================================
   CONTENEDOR DE BOTONES
===================================================== */

const contenedor =
    document.getElementById("destinos");



/* =====================================================
   CREAR LOS BOTONES
===================================================== */

destinos.forEach(function(destino) {


    /*
        Crear botón
    */

    const boton =
        document.createElement("button");


    /*
        Clase visual
    */

    boton.className =
        "destino-button";


    /*
        Nombre del destino
    */

    boton.textContent =
        destino.nombre;


    /*
        Acción al tocar
    */

    boton.addEventListener(
        "click",
        function() {

            irADestino(destino);

        }
    );


    /*
        Agregar al HTML
    */

    contenedor.appendChild(boton);

});



/* =====================================================
   ABRIR GOOGLE MAPS
===================================================== */

function irADestino(destino) {


    /*
        Google Maps recibe únicamente
        el destino.

        Al no indicar un origen,
        Google Maps utiliza la ubicación
        actual del teléfono.
    */


    const url =
        "https://www.google.com/maps/dir/?api=1" +
        "&destination=" +
        encodeURIComponent(
            destino.lat +
            "," +
            destino.lng
        );


    /*
        Abrir Google Maps
    */

    window.location.href =
        url;

}