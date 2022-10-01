import BlogDisplay from "../blogPost/BlogDisplay";
import "./Blogs.css"

function Blogs() {
  return (
    <div className="blogs">
      <BlogDisplay count="18" showPagination="true"></BlogDisplay>
    </div>
  );
}

export default Blogs;
