import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { getCatergories } from "../../services/blogApi";
import "./Form.css";

class BlogForm extends React.Component {
  constructor() {
    super();
    this.state = {
      catergories: [],
    };
  }

  setCatergories(catergories) {
    this.setState({ catergories: catergories });
  }

  loadCatergories() {
    getCatergories()
      .then((response) => response.json())
      .then((data) => this.setCatergories(data));
  }

  componentDidMount() {
    this.loadCatergories();
  }

  render() {
    return (
      <Form>
        <Form.Group as={Col} controlId="formGridTitle">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control type="text" placeholder="Enter blog title" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Blog Category</Form.Label>
          <Form.Select aria-label="Default select example">
            <option disabled>Select the Blog Category</option>
            {this.state.catergories.map(function (cat, i) {
              return (
                <option key={i} value={cat.id}>
                  {cat.name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPicture">
          <Form.Label>Blog Picture</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    );
  }
}

export default BlogForm;
