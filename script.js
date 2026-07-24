const toggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');
const icon = toggle.querySelector('#menuIcon');

toggle.onclick = () => {
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        icon.textContent = 'X';
    } else {
        icon.textContent = '☰';
    }
    // document.body.classList.toggle('blur');
};