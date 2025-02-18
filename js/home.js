



document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher l'envoi classique du formulaire

    // Récupération des valeurs
    const depart = document.getElementById("depart").value;
    const arrivee = document.getElementById("arrivee").value;
    const date = document.getElementById("date").value;

    // Redirection avec paramètres GET
    window.location.href = `resultats.html?depart=${encodeURIComponent(depart)}&arrivee=${encodeURIComponent(arrivee)}&date=${encodeURIComponent(date)}`;
});