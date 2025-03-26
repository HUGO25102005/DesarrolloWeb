function loadHTML(elementId, path) {
    fetch(path)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
            if (elementId === 'navbar-container') {
                inicializarMenu();
            }
        })
        .catch(error => console.error(error));
}

document.addEventListener('DOMContentLoaded', function () {

    loadHTML('navbar-container', './layouts/navbar.html');
    loadHTML('footer-container', './layouts/footer.html');


});


function inicializarMenu() {

    // salir, modifique los dos elementos
    const items = ['Inicio', 'Listado'];

    const navUl = document.getElementById('navbarul');
    if (!navUl) return;

    items.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');

        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.textContent = item;

        a.setAttribute('href', `./${item == 'Inicio' ? 'index' : item.toLowerCase()}.html`);

        li.appendChild(a);
        navUl.appendChild(li);
    });
}

function cambiarMenu() {

    // salir, modifique los dos elementos
    // const items = ['Inicio', 'Listado'];
    let menuAdmin = [
        { titulo: "Ver" },
        { titulo: "Borrar" },
        { titulo: "Imprimir" },
        { titulo: "Salir" }
    ];


    const navUl = document.getElementById('navbarul');
    if (!navUl) return;

    navUl.innerHTML = '';

    menuAdmin.forEach(item => {

        const li = document.createElement('li');
        li.classList.add('nav-item');

        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.textContent = item.titulo;

        a.setAttribute('href', `./${item.titulo == 'Inicio' ? 'index' : item.titulo.toLowerCase()}.html`);

        li.appendChild(a);
        navUl.appendChild(li);
    });

}