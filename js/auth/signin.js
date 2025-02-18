const btnSingin = document.getElementById("btnSignin");

console.log("Bouton trouvé ?", document.getElementById("btnSignin"));

btnSignin.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
});


btnSingin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    console.log("Vérification des credentials");
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        //Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);
        //placer ce token en cookie
        
        setCookie(RoleCookieName, "chauffeur", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}