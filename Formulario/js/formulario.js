document.addEventListener('DOMContentLoaded', () => {
    const light = document.querySelector('#light');
    const dark = document.querySelector('#dark');
    const formulario = document.querySelector('#formulario');
    const body = document.querySelector('body');
    const title = document.querySelector('.title');
    const inputs = document.querySelectorAll('.box-input input');
    const labels = document.querySelectorAll('.box-input label');
    const button = document.querySelector('.box-btn button');

    dark.addEventListener('click', () => {
        body.classList.add('modoDark');
        body.classList.remove('modoLight');
        formulario.classList.add('modoDark');
        formulario.classList.remove('modoLight');
        title.classList.add('modoDark');
        title.classList.remove('modoLight');
        inputs.forEach(input => {
            input.classList.add('modoDark');
            input.classList.remove('modoLight');
        });
        labels.forEach(label => {
            label.classList.add('modoDark');
            label.classList.remove('modoLight');
        });
        button.classList.add('modoDark');
        button.classList.remove('modoLight');
    });

    light.addEventListener('click', () => {
        body.classList.add('modoLight');
        body.classList.remove('modoDark');
        formulario.classList.add('modoLight');
        formulario.classList.remove('modoDark');
        title.classList.add('modoLight');
        title.classList.remove('modoDark');
        inputs.forEach(input => {
            input.classList.add('modoLight');
            input.classList.remove('modoDark');
        });
        labels.forEach(label => {
            label.classList.add('modoLight');
            label.classList.remove('modoDark');
        });
        button.classList.add('modoLight');
        button.classList.remove('modoDark');
    });


    formulario.addEventListener('submit', e => {
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        const apellido = document.querySelector('#apellido').value;
        const email = document.querySelector('#email').value;
        const fecha = document.querySelector('#fecha').value;
        const pais = document.querySelector('#pais').value;

        const prevenirAlerta = document.querySelector('.alerta');
        if (prevenirAlerta) {
            prevenirAlerta.remove();
        }

        const alerta = document.createElement('div');
        alerta.classList.add('alerta');

        if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || fecha.trim() === '' || pais.trim() === '') {
            alerta.textContent = 'Todos los campos son obligatorios';
            formulario.appendChild(alerta);
            setTimeout(() => {
                alerta.remove();
            }, 3000);
            return;
        }

        alert(`Hola ${nombre} el formulario se ha enviado correctamente`);
        formulario.reset();
    });
});