// /var/www/html/sites/emse/js/dom_api.js
// Création d'une requête HTTP
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers l'api' publiée
req.open("GET", "https://faircorp.cleverapps.io/api/rooms");
req.addEventListener("load", function () {
if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
console.log(req.responseText);
} else {
// Affichage des informations sur l'échec du traitement de la requête
console.error(req.status + " " + req.statusText);
}
});
req.addEventListener("error", function () {
// La requête n'a pas réussi à atteindre le serveur
console.error("Erreur réseau");
});
req.send(null);
// affiche la reponse en console
function afficher(reponse) {
console.log(reponse);
} // Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
var req = new XMLHttpRequest();
req.open("GET", url);
req.addEventListener("load", function () {
if (req.status >= 200 && req.status < 400) {
// Appelle la fonction callback en lui passant la réponse de la requête
callback(req.responseText);
} else {
console.error(req.status + " " + req.statusText + " " + url);
}
});
req.addEventListener("error", function () {
console.error("Erreur réseau avec l'URL " + url);
});
req.send(null);
}

ajaxGet("https://faircorp.cleverapps.io/api/rooms", function (response){
  var rooms = JSON.parse(response);
  rooms.forEach(function(room){
    console.log(room.id);
    //addRoom(room.id, room.name);
  })
});
