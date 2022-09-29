import BlogItem from "../blogPost/BlogItem";
import ButtonClick from "../button/Button";
import "./BlogsDisplay.css";

function BlogDisplay() {
  return (
    <div className="blog">
      <BlogItem></BlogItem>
      <BlogItem></BlogItem>
      <BlogItem></BlogItem>

    </div>
  );
}

export default BlogDisplay;
