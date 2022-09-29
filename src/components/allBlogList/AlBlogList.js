import BlogDisplay from "../blogPost/BlogsDisplay";
import BlogpgPagination from "../pagination/Pagination";

function Blogs() {
  return (
    <div>
      <BlogDisplay></BlogDisplay>
      <div>
        <BlogpgPagination></BlogpgPagination>
      </div>
    </div>
  );
}

export default Blogs;
