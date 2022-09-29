import "./BlogsDisplay.css";
import React from "react";
import { getBlogs } from "../../services/blogApi";
import BlogItem from "./BlogItem";
import Pagination from "./../pagination/Pagination";

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
    getBlogs(1, this.props.count)
      .then((response) => response.json())
      .then((data) => this.setBlogsResponse(data));
  }

  componentDidMount() {
    this.loadBlogs();
  }

  getBlogPostComps() {
    return this.getBlogPosts().map((blog, index) => {
      return <BlogItem key={index} blog={blog}></BlogItem>;
    });
  }

  render() {
    return (
      <div className="blog">
        {this.state.blogsResponse &&
          this.state.blogsResponse.data &&
          this.getBlogPostComps()}
        {this.props.showPagination && <Pagination></Pagination>}
      </div>
    );
  }
}

export default BlogDisplay;
