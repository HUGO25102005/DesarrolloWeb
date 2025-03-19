function loadHTML(elementId, path){
    fetch(path)
    .then(response => response.text())
    .then(html => {
        document.getElementById(elementId).innerHTML = html;
    })
    .catch(error => console.error(error));
}

document.addEventListener('DOMContentLoaded', function(){
    loadHTML('navbar-container', './layouts/navbar.html');
    loadHTML('footer-container', './layouts/footer.html');
});
