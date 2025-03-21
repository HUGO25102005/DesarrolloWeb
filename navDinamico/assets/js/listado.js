document.addEventListener('DOMContentLoaded', function () {
    const listaAlumnos = document.getElementById('listaAlumnos');
    const alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];

    if (alumnos.length > 0) {
        alumnos.forEach(alumno => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `Nombre: ${alumno.nombre}, Correo: ${alumno.correo}`;
            listaAlumnos.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = 'No hay alumnos registrados.';
        listaAlumnos.appendChild(li);
    }
});