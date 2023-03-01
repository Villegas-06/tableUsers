import { submitUser } from './firebase.js';
import { getUser } from './firebase.js'
import { deleteUser } from './firebase.js'

window.addEventListener("DOMContentLoaded", () => {

});


const form = document.querySelector("#form");
const formModal = document.querySelector("#deleteUser");


window.uploadUser = () => {

    form.addEventListener('submit', (e) => {
        e.preventDefault()


        const firstName = form["firstName"]
        const lastName = form["lastName"]
        const edad = form["edad"]
        const id = form["idUser"];

        if (firstName.value != "" && lastName.value != "" && edad.value != "" && id.value != "") {
            submitUser(firstName.value, lastName.value, edad.value, id.value);
        } else {
            alert("Faltan datos en el formulario, ingrese nuevamente");
            location.reload();
        }

    });
}


window.deleteUserFinal = () => {

    formModal.addEventListener('submit', (y) => {
        y.preventDefault();

        const deleteId = formModal["idDeleteUser"];

        if (deleteId.value != "") {
            deleteUser(deleteId.value);
        } else {
            alert("Ingrese ID")
        }

    })
}


window.getUserFb = () => {
    getUser();
}

window.deleteEntries = () => {

    if (document.querySelector("#agregar > tr")) {
        alert("Tabla eliminada");
    }

    const contenedorRemove = document.querySelectorAll("#agregar > tr");

    for (let x = 0; x < contenedorRemove.length; x++) {
        contenedorRemove[x].remove();
        document.querySelector("#agregar > br").remove();
    }
}

