import "./BlogDisplay.css";
import React, { useEffect } from "react";
import { getBlogs } from "../../services/blogApi";
import BlogItem from "./BlogItem";
import BlogPagination from "../blogPagination/BlogPagination";
import Btn from "../btn/Btn";

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

  loadNextPage = () => {
    this.setCurrentPage(this.state.blogsResponse.current_page + 1);
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
        {this.props.showMore && (
          <Btn
            className="blog-btn"
            btnText="Show More"
            onClick={this.loadNextPage}
          />
        )}
      </div>
    );
  }
}

export default BlogDisplay;
