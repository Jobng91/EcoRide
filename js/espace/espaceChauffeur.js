alert("espaceChauffeur.js");

console.log("Bouton trouvé ?", document.getElementById("btnChange"));

document.getElementById("btnChange").addEventListener("click", function () {
    this.textContent = (this.textContent === "Cliquez-moi") ? "Texte modifié !" : "Cliquez-moi";
});