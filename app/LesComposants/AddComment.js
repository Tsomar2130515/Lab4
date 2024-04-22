
function AddComment({ publicationId }) {

    async function AjouterCommentaire(formData) {
        "use server";
        const commentaire = formData.get('commentaire');
        fetch('http://localhost:3000/commentaires', {
            method: 'POST',
            body: JSON.stringify({
                publicationID: publicationId,
                datePublication: new Date().toLocaleDateString(),
                contenu: commentaire
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

    }
    

    return (
        <div className="container">
            <div className="row" id="groupComments">
                <form action={AjouterCommentaire} method = "POST">
                    <div className="row">
                        <div className="col">
                            <textarea className="form-control" id="commentaire" rows="6" name="commentaire" required placeholder="Ajouter un commentaire" ></textarea>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col text-end">
                            <button type="submit" className="btn btn-primary text-white">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddComment;