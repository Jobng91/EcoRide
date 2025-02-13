import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/covoiturage", "Covoiturage", "/pages/covoiturage.html"),
    new Route("/detail", "Detail", "/pages/detail.html"),
    new Route("/profil", "Profil", "/pages/profil.html"),
    new Route("/course", "Course", "/pages/course.html"),
    new Route("/espaceAdmin", "Espace Admin", "/pages/espaceAdmin.html"),
    new Route("/espaceChauffeur", "Espace Chauffeur", "/pages/espaceChauffeur.html"),
    new Route("/espaceEmploye", "Espace Employe", "/pages/espaceEmploye.html"),
    new Route("/espacePassager", "Espace Passager", "/pages/espacePassager.html"),
    new Route("/validation", "Validation", "/pages/validation.html"),
    new Route("/inscription", "Inscription", "/pages/inscription.html"),
    new Route("/connexion", "Connexion", "/pages/connexion.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";