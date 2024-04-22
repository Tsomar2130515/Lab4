function Header() 
{
    return <>
    <div className="container">
            
           
    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="../images/CEPI.png" className="classLog" alt="Logo du CEPI."/></a>
                    <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link me-5" href="index.html">Menu1</a> 
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-5" href="#">Menu2</a> 
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-5" href="#">Menu3</a> 
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Menu4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-none d-md-block">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </div>
        </div>

    </nav>
    </div>
        
    </>
}
export default Header


