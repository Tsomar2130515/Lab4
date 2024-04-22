import { resolve } from 'styled-jsx/css';
import { publications,commentaires} from '../db.json';
let db;


export function openDatabase() {
    const request = indexedDB.open("BlogIndexDB", 1);

    request.onupgradeneeded = function(event) {
        db = event.target.result;

        
        const publicationsStore = db.createObjectStore("publications", { keyPath: "id", autoIncrement: true });
        publicationsStore.createIndex("titre", "titre");
        publicationsStore.createIndex("auteur", "auteur");
        publicationsStore.createIndex("date", "date");
        publicationsStore.createIndex("contenu", "contenu");

        
        const commentairesStore = db.createObjectStore("commentaires", { keyPath: "id", autoIncrement: true });
        commentairesStore.createIndex("publicationID", "publicationID");
        commentairesStore.createIndex("datePublication", "datePublication");
        commentairesStore.createIndex("contenu", "contenu");

    };

    request.onerror = function(event) {
        console.log("Erreur lors de l'ouverture de la base de données :", event.target.errorCode);
    };

    request.onsuccess = function(event) {
        db = event.target.result;
    };
}

export function addPublication(unePublication) 
{
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["publications"], "readwrite");
        const store = transaction.objectStore("publications");
        const request = store.add(unePublication);

        request.onsuccess = function(event) {
            resolve("Publication ajoutée avec succès");
        };

        request.onerror = function(event) {
            console.error("Erreur lors de l'ajout de la publication :", event.target.errorCode);
        }
    })
}


export function getPublications() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["publications"], "readwrite");
        const store = transaction.objectStore("publications");
        const request = store.getAll();

        request.onsuccess = function(event) {
            resolve(request.result);
        };

        request.onerror = function(event) {
            reject("Erreur lors de la sélection des publications :", event.target.errorCode);
        }
    })
}


export function addCommentaire(unCommentaire) 
{

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["commentaires"], "readwrite");
        const store = transaction.objectStore("commentaires");
        const request = store.add(unCommentaire);

        request.onsuccess = function(event) {
            resolve("Commentaire ajouté avec succès");
        };

        request.onerror = function(event) {
            console.error("Erreur lors de l'ajout du commentaire :", event.target.errorCode);
        }
    })
}

    
    

export function getCommentaires() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["commentaires"], "readwrite");
        const store = transaction.objectStore("commentaires");
        const request = store.getAll();

        request.onsuccess = function(event) {
            resolve(request.result);
        };

        request.onerror = function(event) {
            reject("Erreur lors de la récupération des commentaires :", event.target.errorCode);
        }
    })
    
}


export function deletePublication(id) {
    const transaction = db.transaction(["publications"], "readwrite");
    const store = transaction.objectStore("publications");

    const request = store.delete(id);

    request.onsuccess = function(event) {
        console.log("Publication supprimée avec succès");
    };

    request.onerror = function(event) {
        console.error("Erreur lors de la suppression de la publication :", event.target.errorCode);
    };
}


export function deleteCommentaire(id) {
    const transaction = db.transaction(["commentaires"], "readwrite");
    const store = transaction.objectStore("commentaires");

    const request = store.delete(id);

    request.onsuccess = function(event) {
        console.log("Commentaire supprimé avec succès");
    };

    request.onerror = function(event) {
        console.error("Erreur lors de la suppression du commentaire :", event.target.errorCode);
    };
}
export { db };

export function initialisationIndexBDPub() 
{
     
    const listPubIndexDB = getPublications();
    if(listPubIndexDB.length === 0) 
    {
        for (const items of publications) 
        {
            addPublication(items);
     
        } 
    } 
    else
    {
        throw("La base de données est déjà initialisée");
    }
} 

export function initialisationIndexBDCom() 
{
     
    const listComIndexDB = getCommentaires();
    if(listComIndexDB.length === 0) 
    {
        for (const items of commentaires) 
        {
            addCommentaire(items);
     
        } 
    } 
    else
    {
        throw("La base de données est déjà initialisée");
    }
} 



    
