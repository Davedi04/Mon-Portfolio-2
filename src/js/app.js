const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('open'); // Ajoute/enlève la classe 'open' pour ouvrir/fermer le menu
    
    // Vérifie si le menu est ouvert ou fermé, et change l'icône
    if (menu.classList.contains('open')) {
        menuIcon.textContent = 'close'; 
    } else {
        menuIcon.textContent = 'menu'; 
    }
});