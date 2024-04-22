import { useEffect, useState } from "react"; 
 
import BlogCard from "./BlogCard";
function BlogList()
{
    const [publications, setPublications] = useState([]);


    useEffect(() => {
    fetch('http://localhost:3000/publications')
        .then(response => response.json())
        .then(json  =>  setPublications(json)) 
    }, []); 


        return <>
    
        <div className="container flex-grow-1">
            <div className="container">
                <div className="row" id="groupCard1">
                {publications.map(unePublication => (
                        <BlogCard
                            key={unePublication.id}
                            id={unePublication.id}
                            titre={unePublication.titre}
                            contenu={unePublication.contenu}
                        />
                    ))}
                
                    
                </div>
            </div>
        </div>
    </>
        
        
    

} 
export default BlogList
