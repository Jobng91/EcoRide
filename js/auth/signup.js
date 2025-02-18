const form = document.getElementById("registerForm");
const inputPseudo = document.getElementById("PseudoInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");

// Écoute des événements
inputPseudo.addEventListener("keyup", validatePseudo);
inputMail.addEventListener("keyup", validateMail);
inputPassword.addEventListener("keyup", validatePassword);
inputValidationPassword.addEventListener("keyup", validatePasswordMatch);

// Gestion de la soumission du formulaire
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire si non valide

    let isValid = validatePseudo() && validateMail() && validatePassword() && validatePasswordMatch();

    if (isValid) {
        alert("Inscription réussie !");
        form.submit(); // Envoie le formulaire si tout est bon
    }
});

// Validation du pseudo (3 à 20 caractères alphanumériques)
function validatePseudo() {
    const pseudoRegex = /^[a-zA-Z0-9]{3,20}$/;
    return toggleValidation(inputPseudo, pseudoRegex.test(inputPseudo.value));
}

// Validation de l'email
function validateMail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return toggleValidation(inputMail, emailRegex.test(inputMail.value));
}

// Validation du mot de passe (min 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial)
function validatePassword() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return toggleValidation(inputPassword, passwordRegex.test(inputPassword.value));
}

// Validation de la confirmation du mot de passe
function validatePasswordMatch() {
    return toggleValidation(inputValidationPassword, inputPassword.value === inputValidationPassword.value && inputPassword.value !== "");
}

// Fonction de mise à jour des classes Bootstrap
function toggleValidation(input, isValid) {
    if (isValid) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
    return isValid;
}

// Gestion de l'affichage des mots de passe
document.querySelectorAll(".toggle-password").forEach(button => {
    button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const passwordField = document.getElementById(targetId);
        
        // Alterne entre password et text
        if (passwordField.type === "password") {
            passwordField.type = "text";
            this.innerText = "🙈"; // Icône pour masquer
        } else {
            passwordField.type = "password";
            this.innerText = "👁️"; // Icône pour afficher
        }
    });
});
