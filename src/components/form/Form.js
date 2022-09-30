import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { getCatergories, saveBlogPost } from "../../services/blogApi";
import Btn from "../btn/Btn";
import "./Form.css";

class BlogForm extends React.Component {
  constructor() {
    super();
    this.state = {
      catergories: [],
      title: "",
      img: "",
      catergory: "",
      description: "",
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

  onSave = () => {
    saveBlogPost(this.state).then(alert("Blog created"));
  };

  componentDidMount() {
    this.loadCatergories();
  }

  render() {
    return (
      <Form>
        <Form.Group as={Col} controlId="formGridTitle">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter blog title"
            onChange={(e) => this.setState({ title: e.currentTarget.value })}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Blog Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) =>
              this.setState({ catergory: e.currentTarget.value })
            }
          >
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
          <Form.Control
            type="file"
            onChange={(e) => {
              // debugger;
              console.log(e.currentTarget.files[0]);
              this.setState({ img: e.currentTarget.files[0] });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) =>
              this.setState({ description: e.currentTarget.value })
            }
          />
        </Form.Group>
        <Btn btnText="Save" onClick={this.onSave}></Btn>
      </Form>
    );
  }
}

export default BlogForm;
