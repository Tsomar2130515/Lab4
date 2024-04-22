
import Header from "../LesComposants/Header.js";
import Footer from "../LesComposants/Footer.js";
import BlogDetails from "../LesComposants/BlogDetails.js";
import AddComment from "../LesComposants/AddComment";
import CommentList from "../LesComposants/CommentList";

function Blog({ id }) {
    return (
        <div>
            <Header />
            <BlogDetails publicationId={id} />
            <AddComment publicationId={id} />
            <CommentList publicationId={id} />
            <Footer />
        </div>
    );
}
export default Blog;



  