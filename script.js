// Toggle de tema claro/escuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verifica se o tema escuro foi salvo no localStorage
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
}

// Evento de clique do botão de tema
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Manipulador do formulário de contato
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado pela mensagem! Em breve entrarei em contato.');
        form.reset();
    });
}
