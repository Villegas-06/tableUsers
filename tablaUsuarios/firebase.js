
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
//import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import { getDatabase, ref, onValue, set, remove} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyCkcOUEtn2vZLypWwF9bG1w7fvuPCqp8OY",
    authDomain: "users-fb.firebaseapp.com",
    databaseURL: "https://users-fb-default-rtdb.firebaseio.com",
    projectId: "users-fb",
    storageBucket: "users-fb.appspot.com",
    messagingSenderId: "775355336406",
    appId: "1:775355336406:web:f38c4d4e1f46526e0c2b77"
};

const app = initializeApp(firebaseConfig);


const db = getDatabase();


const idUser = "3214";

//console.log(ref(db, "users/" + "3214"));


export const submitUser = (firstName, lastName, edad, id) => {

    alert("Subiendo usuario a la base de datos")
    //console.log(name,lastname,edad);
    set(ref(db, "users/" + id), {
        id,
        firstName,
        lastName,
        edad
    }).then(() => {
        alert('Usuario subido con éxito');
    }).catch(error => {
        alert(error)
    });
}


export const deleteUser = (deleteId) => {

    const starDelete = ref(db, "users/" + deleteId);
    remove(starDelete).then(() =>{
        alert("Usuario eleminado");
    }).catch((error) =>{
        alert(error);
    });

}

export const getUser = () => {

    alert("Recuperando info de la base de datos");

    const starCount = ref(db, "users/");
    onValue(starCount, (snap) => {
        const data = snap.val();
        console.log(data);

        const contenedor = document.querySelector("#agregar");
        const contenedorRemove = document.querySelectorAll("#agregar > tr");
        
        for(let x = 0; x < contenedorRemove.length; x++){
            contenedorRemove[x].remove();
            document.querySelector("#agregar > br").remove();
        }

        if (data != null) {

            let users = Object.values(data);

            for (let i = 0; i < users.length; i++) {

                let agregar = ` 
                <br />
                <tr class="linea row">
                    <td class="col">${users[i].id}</td>
                    <td class="col">${users[i].firstName}</td>
                    <td class="col">${users[i].lastName}</td>
                    <td class="col">${users[i].edad}</td>
                    <td class="col"><button class="btn btn-outline-success material-icons button-table id-${users[i].id}-update ">restart_alt</button></td>
                    <td class="col"><button type="button" class="btn btn-outline-warning material-icons button-table id-${users[i].id}-delete " data-bs-toggle="modal" data-bs-target="#modalDeleteUser">delete</button></td>
                </tr>`

                contenedor.innerHTML += agregar;

            }
        } else {
            alert("No existen usuarios en la base de datos")
        }
    })

} 


