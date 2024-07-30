
document.addEventListener('DOMContentLoaded', function () {

    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const showHideButton = document.getElementById('show-hide')

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    })

    emailInput.addEventListener('blur', function () {
        validateEmail()
    })

    emailInput.addEventListener('change', function () {
        clearError(emailError)
    })

    passwordInput.addEventListener('change', function () {
        clearError(passwordError)
    })

    confirmPasswordInput.addEventListener('change', function () {
        clearError(confirmPasswordError)
    })

    showHideButton.addEventListener('click', function () {
        if (passwordInput.type == 'password') {
            passwordInput.type = 'text'
            confirmPasswordInput.type = 'text'
        } else {
            passwordInput.type = 'password'
            confirmPasswordInput.type = 'password'
        }
    })

    function validateForm() {
        const isValidEmail = validateEmail()
        const isValidPassword = validatePassword()
        const passwordMatch = validatePasswordMatch()

        if (isValidEmail && isValidPassword && passwordMatch) {
            saveToLocalStorage()
            alert('Has ingresado con éxito')
        }

    }

    function validateEmail() {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const emailValue = emailInput.value.trim() // el trim lo que hace es eliminar espacios vacíos al comienzo y final del input

        if (!emailRegex.test(emailValue)) {
            showError(emailError, 'Ingresa un email válido')
            return false
        }

        return true
    }

    function validatePassword() {
        const passwordValue = passwordInput.value.trim()

        if (passwordValue.length < 6) {
            showError(passwordError, 'Ingresa una contraseña de al menos 6 caracteres')
            return false;
        }

        return true
    }

    function validatePasswordMatch() {
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        if (passwordValue != confirmPasswordValue) {
            showError(confirmPasswordError, 'Las contraseñas no coinciden')
            return false;
        }

        return true;
    }

    function showError(errorElement, message) {
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
    }

    function clearError(errorElement,) {
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }

    function saveToLocalStorage() {
        const emailValue = emailInput.value.trim();
        localStorage.setItem('email', emailValue)
        const body = bodyBuilderJSON()
        console.log(body)
    }

    function bodyBuilderJSON() {
        return {
            "email": emailInput.value,
            "password": passwordInput.value
        }
    }



})
















// document.addEventListener('DOMContentLoaded', function(){

//     const loginForm = document.getElementById('loginForm');
//     const emailInput = document.getElementById('email');
//     const passwordInput = document.getElementById('password');
//     const confirmPasswordInput = document.getElementById('confirmError');
//     const emailError = document.getElementById('emailError');
//     const passwordError = document.getElementById('passwordError');
//     const confirmPasswordError = document.getElementById('confirmPasswordError');
//     const showHideButton = document.getElementById('show-hide');


//     loginForm.addEventListener('submit', function(event){
//         event.preventDefault();
//         //TODO: agregar metodo que valide el formulario
//         validateForm();
//     })
//     emailInput.addEventListener('blur', function(){
//         //TODO: agregar metodo que valide el mail
//         validateEmail();
//     })

//     emailInput.addEventListener('change', function(){
//         //TODO: agregar metodo que limpie el error
//         clearError(emailError);
//     })

//     passwordInput.addEventListener('change', function(){
//         //TODO: agregar metodo que limpie el error
//         clearError(passwordError);
//     })

//     confirmPasswordInput.addEventListener('change', function(){
//         //TODO: agregar metodo que limpie el error
//         clearError(confirmPasswordError);
//     })

//     showHideButton.addEventListener('click', function(){
//         if(passwordInput.type == 'password'){
//             passwordInput.type = 'text';
//             confirmPasswordInput.type = 'text';
//         }else{
//             passwordInput.type = 'password';
//             confirmPasswordInput.type = 'password';
//         }
//     })


//     function validateForm(){
//         const isValidEmail = validateEmail(); 
//         const isValidPassword = validatePassword();
//         const passwordMatch = validatePasswordMatch();

//         if(isValidEmail && isValidPassword && passwordMatch){
//             //guardar mail en local storage y generar un json en consola
//             saveToLocalStorage();
//             alert('Has ingresado con exito');
//         }
//     }

//     function validateEmail(){
//         const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
//         const emailValue = emailInput.value.trim() //trim elimina espacios vacias al principio y final de la palabra.
    
        
//         if(!emailRegex.test(emailValue)){
//             //TODO. mostar error
//             showError(emailError, 'Ingresa una email válido');
//         return false;
//         }
//         return true;
//     }

//     function validatePassword(){
//         const passwordValue = passwordInput.value.trim();

//         if(passwordValue.lenght < 6){
//             //TODO. mostrar error
//             showError(passwordError, 'Ingresa una contraseña de al menos 6 caracteres');
//             return false;
//         }
//         return true;
//     }


//     function validatePasswordMatch(){
//         const passwordValue = passwordInput.value.trim();
//         const confirmPasswordValue = confirmPasswordInput.value.trim();
        
//         if(passwordValue != confirmPasswordValue){
//             //TODO. mostrar el error
//             showError(confirmPasswordError, 'Las contraseñas no coinciden');
//             return false;
//         }
//         return true;
//     }

//     function showError(errorElement, message){
//         errorElement.innerHTML = message;
//         errorElement.style.display = 'block';
//     }

//     function clearError(errorElement, message){
//         errorElement.innerHTML = '';
//         errorElement.style.display = 'none';
//     }

//     function saveToLocalStorage(){
//         const emailValue = emailInput.value.trim();
//         localStorage.setItem('email', emailValue);
//         //TODO hacer json
//         const body = bodyBuilderJSON();
//         console.log(body);
//     }

//     function bodyBuilderJSON(){
//         return {
//             "email" : emailInput.value,
//             "password" : passwordInput.value
//         }

//     }


// })