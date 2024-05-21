document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-mobile').classList.toggle('active');
});

document.getElementById('close-menu-mobile').addEventListener('click', function() {
    document.getElementById('nav-mobile').classList.remove('active');
    // element.classList.remove("mystyle");
});
