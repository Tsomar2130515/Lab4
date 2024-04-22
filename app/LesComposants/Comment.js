function Comment({id,publicationID,datePublication,contenu })
{
    return <>
    <div className="row mb-3">
                <div className="col-1">
                    <div className="card border-dark text-center">
                        <img src="/images/personne1.png" className="card-img-top mx-auto mt-3 classLog" alt="Image internaute 1." />
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex align-items-start">
                        <p>{contenu}</p>
                        <p className="ms-auto">Publié le : ----- {datePublication} -----</p>
                    </div>
                </div>
            </div>
          
    </>
}
export default Comment

