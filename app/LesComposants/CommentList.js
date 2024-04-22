'use client';
import Comment from "../LesComposants/Comment.js";
import { useEffect, useState } from "react";  



function CommentList({ publicationId }) {
    const [commentaires, setCommentaires] = useState([]);
    const fetchCommentaires = () => {
        fetch(`http://localhost:3000/commentaires`)
            .then(response => response.json())
            .then(commentaires => {
                const commentairesPub = commentaires.filter(commentaire => commentaire.publicationID === publicationId);
                setCommentaires(commentairesPub);
            })
            .catch(error => console.error('Erreur lors de la récupération des commentaires :', error));
    };

    useEffect(() => {
        fetchCommentaires();

        const intervalleRecupCom = setInterval(fetchCommentaires, 1000); 

        return () => clearInterval(intervalleRecupCom);
    }, [publicationId]); 

    return (
        <div className="container">
            <div className="row" id="groupComments">
                {commentaires.map(unCommentaire => (
                    <Comment
                        key={unCommentaire.id}
                        id={unCommentaire.id}
                        publicationID={unCommentaire.publicationID}
                        datePublication={unCommentaire.datePublication}
                        contenu={unCommentaire.contenu}
                    />
                ))}
            </div>
        </div>
    );
}

export default CommentList;


