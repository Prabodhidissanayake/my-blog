import "./BlogsDisplay.css";
import React, { useEffect } from "react";
import { getBlogs } from "../../services/blogApi";
import BlogItem from "./BlogItem";
import BlogPagination from "../blogPagination/BlogPagination";

class BlogDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      blogsResponse: {},
      currentPage: 1,
    };
  }

  setBlogsResponse(response) {
    this.setState({ blogsResponse: response });
  }

  setCurrentPage = (page) => {
    this.setState({ currentPage: page });
    this.loadBlogs();
  };

  getBlogPosts() {
    return this.state.blogsResponse ? this.state.blogsResponse.data : [];
  }

  getPaginationDetails() {
    return {
      currentPage: this.state.blogsResponse.current_page,
      lastPage: this.state.blogsResponse.last_page,
    };
  }

  loadBlogs() {
    getBlogs(this.state.currentPage, this.props.count)
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
      <div className="blog-container">
        <div className="blogs">
          {this.state.blogsResponse &&
            this.state.blogsResponse.data &&
            this.getBlogPostComps()}
        </div>
        {this.props.showPagination && (
          <BlogPagination
            paginationDetails={this.getPaginationDetails()}
            onPageSelect={this.setCurrentPage}
          ></BlogPagination>
        )}
      </div>
    );
  }
}

export default BlogDisplay;
