import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/covoiturage", "Covoiturage", "/pages/covoiturage/covoiturage.html"),
    new Route("/detail", "Detail", "/pages/covoiturage/detail.html"),
    new Route("/profil", "Profil", "/pages/profil.html"),
    new Route("/course", "Course", "/pages/covoiturage/course.html"),
    new Route("/espaceAdmin", "Espace Admin", "/pages/espace/espaceAdmin.html"),
    new Route("/espaceChauffeur", "Espace Chauffeur", "/pages/espace/espaceChauffeur.html"),
    new Route("/espaceEmploye", "Espace Employe", "/pages/espace/espaceEmploye.html"),
    new Route("/espacePassager", "Espace Passager", "/pages/espace/espacePassager.html"),
    new Route("/validation", "Validation", "/pages/covoiturage/validation.html"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html", "js/auth/signup.js"),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html"),
];
    
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";