function btnEnviar() {
    // capturar los valores de los inputs
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('message').value;
    // enviar los valores del objeto a la consola


    if (nombre === '' || email === '' || mensaje === '') {
        alert("Por favor, complete todos los campos requeridos.");
        return;
    }

    // mostrar un mensaje de alerta
    alert('¡Gracias por enviar tu mensaje! Revisa la consola para ver los detalles.');
    console.log({ nombre, email, mensaje });
    // limpiar los inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}