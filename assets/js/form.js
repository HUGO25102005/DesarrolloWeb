const form = document.getElementById('registro-form');
const alert = ["border", "border-danger"];

function validateForm() {
    const camposFaltantes = [];
    const nombre = document.getElementById('nombre');
    const nocuenta = document.getElementById('nocuenta');
    const charla = document.getElementById('charla');
    const cupo = document.getElementById('cupo');
    const terminos = document.getElementById('terminos');
    let alerta = document.getElementById('cont-alert');

    if (nombre.value.trim() === '') {
        nombre.classList.add(...alert);
        camposFaltantes.push('Nombre');
    }
    if (nocuenta.value.trim() === '') {
        nocuenta.classList.add(...alert);
        camposFaltantes.push('Numero de cuenta');
    }
    if (charla.value.trim() === '') {
        charla.classList.add(...alert);
        camposFaltantes.push('Charla');
    }
    if (cupo.value.trim() === '') {
        cupo.classList.add(...alert);
        camposFaltantes.push('Cupo');
    }
    if (terminos.value.trim() === '') {
        terminos.classList.add(...alert);
        camposFaltantes.push('Terminos');
    }

    if (camposFaltantes.length > 0) {

        let alertas = '';
        camposFaltantes.forEach((campo) => {
            alertas += `<strong>${campo}</strong>, `;
        });

        alerta.innerHTML = `
            <div 
                class="alert alert-danger" 
                role="alert"
                id="alerta"
            >
                
                <strong>Error:</strong> Por favor, completa todos los campos.
                <ul>
                    <li>Los siguientes campos son requeridos: ${alertas}</li>
                </ul>
            </div>
        `;
        return false;
    }
}

function removeClass(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove(...alert);
}

document.getElementById('registro-form').addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    const jsonDataForm = JSON.stringify(data);
    console.log(jsonDataForm);

    if (localStorage.getItem('panelistas') === null) {
        let panelistas = [];
        panelistas.push(alumno);
        localStorage.setItem('panelistas', JSON.stringify(panelistas));
    } else {
        let panelistas = JSON.parse(localStorage.getItem('panelistas'));
        panelistas.push(alumno);
        localStorage.setItem('panelistas', JSON.stringify(panelistas));
    }

    // Mostrar mensaje que sí se guardó
    alert('Registro realizado con éxito');

    // Resetear el formulario
    document.getElementById('formularioRegistro').reset();

    // Mostrar el objeto en la consola
    console.log('Alumno registrado:', alumno);
    
    // Redirigir a la página de listado
    window.location.href = 'listado.html';
});






// alert

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Nice, you triggered this alert message!', 'success')
    })
}


const clearForm = () => {
    form.reset();
}