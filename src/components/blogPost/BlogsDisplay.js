import "./BlogsDisplay.css";
import React, { useState } from "react";
import { getBlogs } from "../../services/blogApi";
import BlogItem from "./BlogItem";

// function BlogDisplay() {
//   const [blogsResponse, setBlogsResponse] = useState({});

//   getBlogs()
//     .then((response) => response.json())
//     .then((data) => setBlogsResponse(data));

//    getBlogs(){
//     return blogsResponse.data;
//   };

//   return (
//     <div className="blog">
//       {blogsResponse && blogsResponse.data && (
//         <span>{JSON.stringify(getBlogs())}</span>
//       )}
//     </div>
//   );
// }

// export default BlogDisplay;

class BlogDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      blogsResponse: {},
    };
  }

  setBlogsResponse(response) {
    this.setState({ blogsResponse: response });
  }

  getBlogPosts() {
    return this.state.blogsResponse ? this.state.blogsResponse.data : [];
  }

  loadBlogs() {
    getBlogs()
      .then((response) => response.json())
      .then((data) => this.setBlogsResponse(data));
  }

  componentDidMount() {
    this.loadBlogs();
  }

  getBlogPostComps() {
    return this.getBlogPosts().map((blog) => {
      return <BlogItem></BlogItem>;
    });
  }

  render() {
    return (
      <div className="blog">
        {this.state.blogsResponse &&
          this.state.blogsResponse.data &&
          this.getBlogPostComps()}
      </div>
    );
  }
}

export default BlogDisplay;
