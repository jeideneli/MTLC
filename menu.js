document.getElementById('menuButton').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
    } else {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    }
});

document.getElementById('registerButton').addEventListener('click', () => {
    const form = document.getElementById('registrationForm');
    form.classList.toggle('visible');
    form.classList.toggle('hidden');
});

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration submitted!');
    this.reset();
    this.classList.remove('visible');
    this.classList.add('hidden');
});

document.getElementById('aboutUsButton').addEventListener('click', () => {
    document.getElementById('schoolBackground').scrollIntoView({ behavior: 'smooth' });
});