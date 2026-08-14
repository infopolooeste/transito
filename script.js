/* =====================================================
   DESTINOS
===================================================== */


const destinos = [

    {
        nombre: "Emergent",
        lat: -34.858899,
        lng: -56.287255
    },


    {
        nombre: "Conaprole",
        lat: -34.858022,
        lng: -56.284150
    },


   {
        nombre: "Dairyco",
        lat: -34.860288,
        lng: -56.283672
    },


    {
        nombre: "Operador logístico Polo Oeste",
        lat: -34.857873,
        lng: -56.286887
    },


    {
        nombre: "Sodimac",
        lat: -34.858092,
        lng: -56.287525
    },


   {
        nombre: "Vasa",
        lat: -34.857427,
        lng: -56.287695
    },


    {
        nombre: "Centro de verificación",
        lat: -34.857251,
        lng: -56.287515
    },


    {
        nombre: "Mezzanine",
        lat: -34.857740,
        lng: -56.286932
    },


    {
        nombre: "Integra 2",
        lat: -34.857126,
        lng: -56.287545
    },


    {
        nombre: "Oficinas Polo Oeste",
        lat: -34.856989,
        lng: -56.286952
    },


    {
        nombre: "Unilever",
        lat: -34.856472,
        lng: -56.287021
    },


    {
        nombre: "Mondelez",
        lat: -34.855712,
        lng: -56.287853
    },


    {
        nombre: "H&M",
        lat: -34.854919,
        lng: -56.287939
    },


    {
        nombre: "Pepsico",
        lat: -34.855145,
        lng: -56.284335
    },


    {
        nombre: "Vehículos",
        lat: -34.854498,
        lng: -56.286078
    },


   {
        nombre: "Control de acceso",
        lat: -34.858853,
        lng: -56.288733
    },


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


    const boton =
        document.createElement("button");


    boton.className =
        "destino-button";


    boton.textContent =
        destino.nombre;


    boton.addEventListener(
        "click",
        function() {

            irADestino(destino);

        }
    );


    contenedor.appendChild(boton);

});



/* =====================================================
   ABRIR GOOGLE MAPS
===================================================== */

function irADestino(destino) {


    const url =
        "https://www.google.com/maps/dir/?api=1" +
        "&destination=" +
        encodeURIComponent(
            destino.lat +
            "," +
            destino.lng
        );


    window.location.href =
        url;

}
