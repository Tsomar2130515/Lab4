
import { db } from '../LesScriptsJs/BlogIndexDB.js';
 
export function loadJSONDataToIndexedDB() {
    fetch('http://localhost:3000/') 
        .then(response => response.json())
        .then(data => {
            
            var transaction = db.transaction(["publications", "commentaires"], "readwrite");
            var storePublications = transaction.objectStore("publications");
            var storeCommentaires = transaction.objectStore("commentaires");

            
            data.publications.forEach(publication => {
                storePublications.add(publication);
            });

            
            data.commentaires.forEach(commentaire => {
                storeCommentaires.add(commentaire);
            });
        })
        .catch(error => {
            console.error('Erreur lors du chargement des données JSON :', error);
        });
}


window.onload = function() {
    loadJSONDataToIndexedDB();
};
