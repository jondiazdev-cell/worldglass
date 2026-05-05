function reveal(){
let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){
let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let visible=100;

if(elementTop<windowHeight-visible){
reveals[i].classList.add("active");
}
}
}

window.addEventListener("scroll",reveal);

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const vehiculo = document.getElementById("vehiculo").value;
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value;

    const texto = `Hola, quiero cotizar:%0A
Nombre: ${nombre}%0A
Teléfono: ${telefono}%0A
Vehículo: ${vehiculo}%0A
Servicio: ${servicio}%0A
Mensaje: ${mensaje}`;

    const url = `https://wa.me/56941075314?text=${texto}`;

    window.open(url, "_blank");
});