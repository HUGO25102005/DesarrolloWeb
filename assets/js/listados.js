document.getElementById('formularioAlumno').addEventListener('submit',
    function (e) {
        e.preventDefault(); // Evita que el formulario se envíe

        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;

        // Crear objeto con los datos
        const datos = {
            nombre: nombre,
            correo: correo
        };

        // Obtener o inicializar el array "alumnos" en localStorage
        let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];

        // Agregar el nuevo alumno al array
        alumnos.push(datos);

        // Guardar el array actualizado en localStorage
        localStorage.setItem('alumnos', JSON.stringify(alumnos));

        // Resetear el formulario
        document.getElementById('formularioAlumno').reset();

        
    });