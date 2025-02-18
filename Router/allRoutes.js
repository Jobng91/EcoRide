import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/covoiturage", "Covoiturage", "/pages/covoiturage/covoiturage.html",[], "js/covoiturage/covoiturage.js"),
    new Route("/detail", "Detail", "/pages/covoiturage/detail.html", ["passager"]),
    new Route("/profil", "Profil", "/pages/profil.html", []),
    new Route("/course", "Course", "/pages/covoiturage/course.html", ["chauffeur    "]),
    new Route("/espaceAdmin", "Espace Admin", "/pages/espace/espaceAdmin.html",[ "admin"]),
    new Route("/espaceChauffeur", "Espace Chauffeur", "/pages/espace/espaceChauffeur.html",["chauffeur"], "js/espace/espaceChauffeur.js"),
    new Route("/espaceEmploye", "Espace Employe", "/pages/espace/espaceEmploye.html",["employe"]),
    new Route("/espacePassager", "Espace Passager", "/pages/espace/espacePassager.html",["passager"]),
    new Route("/validation", "Validation", "/pages/covoiturage/validation.html",["passager"]),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html",["disconnected"], "js/auth/signup.js"),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html",["disconnected"], "js/auth/signin.js"),
];
    
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";