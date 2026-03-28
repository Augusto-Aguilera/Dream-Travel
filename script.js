// Lógica del Formulario de Contacto - DreamTravel
const form = document.getElementById('contactForm');
const btn = document.getElementById('submitBtn');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    
    // Feedback visual inmediato
    btn.innerText = 'Enviando...';
    btn.style.backgroundColor = '#ccc';
    btn.disabled = true;

    // Simulamos el envío a un servidor (espera de 2 segundos)
    setTimeout(() => {
        alert('¡Gracias Patric! Tu mensaje ha sido enviado con éxito. Nos comunicaremos contigo a la brevedad.');
        
        // Resetear el formulario y devolver el botón a su estado original
        form.reset();
        btn.innerText = 'Enviar mensaje';
        btn.style.backgroundColor = '#e63946';
        btn.disabled = false;
    }, 2000);
});