
// Fonction pour récupérer les paramètres de l'URL
function getParamsFromURL() {
    const params = new URLSearchParams(window.location.search);
    return {
        depart: params.get("depart") || "",
        arrivee: params.get("arrivee") || "",
        date: params.get("date") || ""
    };
}

// Remplir les champs avec les valeurs récupérées
window.onload = function() {
    const params = getParamsFromURL();
    document.getElementById("depart").value = params.depart;
    document.getElementById("arrivee").value = params.arrivee;
    document.getElementById("date").value = params.date;


    if (params.depart && params.arrivee && params.date) {
        setTimeout(() => {
            form.submit();
        }, 500); // Petite pause pour que l'utilisateur voie les données apparaître
    }
};




function filtrerCovoiturages() {
    let departFiltre = document.getElementById("depart").value.trim().toLowerCase();
    let arriveeFiltre = document.getElementById("arrivee").value.trim().toLowerCase();
    let dateFiltre = document.getElementById("date").value;
    let prixMax = document.getElementById("prixMax").value;
    let dureeMax = document.getElementById("dureeMax").value;
    let noteMin = document.getElementById("noteMin").value;

    let cartes = document.querySelectorAll(".card");

    cartes.forEach(carte => {
        let texteCarte = carte.textContent.toLowerCase(); // Texte complet pour recherche
        let prix = parseInt(carte.querySelector("p:nth-child(3)").textContent.match(/\d+/)[0]); // Prix
        //let duree = parseFloat(carte.querySelector("p:nth-child(6)").textContent.match(/\d+(\.\d+)?/)[0]); // Durée
        let note = parseFloat(carte.querySelector(".bi-star-fill + span").textContent); // Note
        let date = carte.querySelector("p:nth-child(4)").textContent.match(/\d{2}\/\d{2}\/\d{4}/); // Date

        let afficher = true;

        if (departFiltre && !texteCarte.includes(departFiltre)) afficher = false;
        if (arriveeFiltre && !texteCarte.includes(arriveeFiltre)) afficher = false;
        if (dateFiltre && (!date || date[0].split("/").reverse().join("-") !== dateFiltre)) afficher = false;
        if (prixMax && prix > prixMax) afficher = false;
        if (dureeMax && duree > dureeMax) afficher = false;
        if (noteMin && note < noteMin) afficher = false;

        carte.style.display = afficher ? "block" : "none";
    });

}

document.getElementById("filtrerBtn").addEventListener("click", filtrerCovoiturages);

// Filtrage automatique sur les critères de voyage
document.getElementById("depart").addEventListener("input", filtrerCovoiturages);
document.getElementById("arrivee").addEventListener("input", filtrerCovoiturages);
document.getElementById("date").addEventListener("change", filtrerCovoiturages);  