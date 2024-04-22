 
import Link from "next/link";
import { ArrowLeft } from 'react-bootstrap-icons'; 
function AddPublication() {

    async function AjouterPublication(formData) {
        "use server";
        const titre = formData.get('titre');
        const auteur = formData.get('auteur');
        const contenu = formData.get('contenu');
        

        fetch('http://localhost:3000/publications', {
            method: 'POST',
            body: JSON.stringify({
                titre: titre,
                auteur: auteur,
                datePublication: new Date().toLocaleDateString(),                
                contenu: contenu
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        
    }
    

    return (
        <>
            <h2>Ajouter une publication</h2>
            <form action={AjouterPublication}method = "POST">
                <label className ="label" htmlFor="titre">Titre :</label>
                <input type="text" id="titre" name="titre"    required />
                
                <label className="label" htmlFor="auteur">Auteur :</label>
                <input type="text" id="auteur" name="auteur" required />

                <label className = "label" htmlFor="contenu">Contenu :</label>
                <textarea id="contenu" name="contenu" rows="4" required></textarea>

                <button type="submit">Envoyer</button>
            </form>
            <div id="linkPrinc">
            <Link href="/">
                <button> <ArrowLeft />Revenir à la page principale</button>
            </Link>
            </div>
            
        </>
    );
}

export default AddPublication;



