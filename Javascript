// Movimiento 3D del círculo siguiendo al ratón/dedo
const circle = document.getElementById('mainCircle');

document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    
    circle.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Resetear posición cuando el mouse sale
document.addEventListener('mouseleave', () => {
    circle.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// Soporte para móviles (inclinación)
window.addEventListener('deviceorientation', (e) => {
    let x = e.beta / 4; // Inclinación adelante/atrás
    let y = e.gamma / 4; // Inclinación izquierda/derecha
    circle.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
});
