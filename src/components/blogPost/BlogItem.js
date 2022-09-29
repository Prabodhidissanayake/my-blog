import React from "react";
import Card from "react-bootstrap/Card";
import "./BlogItem.css";
import placeholderImg from "../../img/watch.jpg";

class BlogItem extends React.Component {
  constructor() {
    super();
  }

  getBlog() {
    return this.props.blog;
  }

  render() {
    return (
      <Card className="blog-item" style={{ width: "15rem" }}>
        {/* <Card.Img
          variant="top"
          src={"https://frontend-case-api.sbdev.nl/" + this.getBlog().img_url}
        /> */}
        <Card.Img variant="top" src={placeholderImg} />
        <Card.Body>
          <Card.Title>{this.getBlog().title}</Card.Title>
          <Card.Text>{this.getBlog().content}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default BlogItem;
