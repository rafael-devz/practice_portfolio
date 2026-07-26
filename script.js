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
};

// FOR DISPLAYING AGE
let birthDate = new Date('2005-10-24');
let dateToday = new Date();

let age = dateToday.getFullYear() - birthDate.getFullYear();
let month = dateToday.getMonth() - birthDate.getMonth();

// CONDITION TO CALCULATE THE AGE
if (month < 0 || (month === 0 && dateToday.getDate() < birthDate.getDate())) {
    age--;
}

document.getElementById('age').textContent = age;