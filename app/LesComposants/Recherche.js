function Recherche() {
    return <>
        <div id="navbarNav">
            <div className="container md-3">
                <div className="row">
                    <div className="col-md-4">
                        <form className="input-group">
                            <input type="text" className="form-control" placeholder="Rechercher..." aria-label="Rechercher" />
                        </form>
                    </div>
                    <div className="col-md-4">
                        <p className="mt-2 mb-0 text-center">Trier par :</p>
                    </div>
                    <div class="col-md-4">
                        <select className="form-select">
                            <option >Sélectionner</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Recherche
