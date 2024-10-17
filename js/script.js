// script.js

// Función para activar el modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Guardar estado en localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    // Mensaje en consola
    console.log(isDarkMode ? 'Modo oscuro activado' : 'Modo oscuro desactivado');
}

// Inicializa el modo oscuro basado en el estado guardado
function initializeDarkMode() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
}

// Evento para el botón de modo oscuro
document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    const themeToggleButton = document.getElementById('themeToggle');
    
    // Verifica que el botón de alternar tema exista antes de agregar el evento
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleDarkMode);
    }
});
