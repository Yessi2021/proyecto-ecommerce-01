
function savedUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
}


let message = document.querySelector('.message');
const showLogin = document.getElementById('login-form');
const showRegister = document.getElementById('register-form');
message.innerHTML = "Registro";


let changedPage = document.querySelector('#login-button');
changedPage.innerHTML = "Tienes una cuenta? inicia sesion"
function textFormInputs(params) {
    return changedPage.innerHTML = params
}


changedPage.addEventListener( "click", (e)=> {

    if(e.target.innerHTML === "Tienes una cuenta? inicia sesion") {
    showRegister.style.display = "none";
    showLogin.style.display = "block";
    message.innerHTML = "Login";
    textFormInputs("Crea una cuenta Registrandose")
    }else {
    showRegister.style.display = "block";
    showLogin.style.display = "none";
    message.innerHTML = "Registrarse";
    textFormInputs("Tienes una cuenta? inicia sesion")
    }

}) 





// Función para obtener los datos de usuario almacenados en localStorage
function getUserData(key) {
    const userDataJSON = localStorage.getItem(key);
    return userDataJSON ? JSON.parse(userDataJSON) : null;
}

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Intentar encontrar el objeto de usuario correspondiente al nombre de usuario ingresado
    const keys = Object.keys(localStorage);
    let found = false;

    for (const key of keys) {
        const userData = getUserData(key);

        if (userData && userData.email === email && userData.password === password) {
           window.location.assign('dashbord.html')
            found = true;
            break;
        }
    }

    if (!found) {
        alert('Nombre de usuario o contraseña incorrectos.');
    }

    // Limpiar los campos de entrada después del envío
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
});


// REGISTRO
document.getElementById('register').addEventListener('submit', function (e) {
    e.preventDefault();
    let newUsername = document.getElementById('register-username').value;
    let newUEmail = document.getElementById('register-email').value;
    let newPassword = document.getElementById('register-password').value;
    let newPassword2 = document.getElementById('register-password2').value;

    //  const userData = getUserData();

    // Guardar la información del nuevo usuario en localStorage
    if( newPassword === newPassword2 ) {
       
        const uniqueKey = Date.now().toString();
        const userData = {
            username: newUsername,
            password: newPassword,
            email: newUEmail
        };

        localStorage.setItem(uniqueKey, JSON.stringify(userData));
      

        setTimeout(() => {
            // alert('Registrado con éxito.');
            document.getElementById('register-username').value = '';
            document.getElementById('register-password').value = '';
            document.getElementById('register-password2').value = '';
            document.getElementById('register-email').value = '';
            window.location.assign('dashbord.html')
        }, 500);

    }else {
        alert("Las contraseñas no son iguales")
    }

   
});
