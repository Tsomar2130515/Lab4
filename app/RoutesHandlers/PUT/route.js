export async function PUT(Request) {
    const id = Request.nextUrl.searchParams.get('id');
    const titre = Request.nextUrl.searchParams.get('titre');
    const auteur = Request.nextUrl.searchParams.get('auteur');
    const contenu = Request.nextUrl.searchParams.get('contenu');

    if (id != null && titre != null && auteur != null && contenu != null) {
        const res = await fetch(`http://localhost:3000/publications/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                titre: titre,
                auteur: auteur,
                datePublication: new Date().toLocaleDateString(),
                contenu: contenu
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });

        if (!res.ok) {
            throw new Error('Failed to update publication');
        }

        const data = await res.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            statusText: 'Publication mise à jour avec succès'
        });
    } else {
        return new Response(JSON.stringify({ message: 'Veuillez remplir tous les champs' }), {
            status: 400
        });
    }
}
