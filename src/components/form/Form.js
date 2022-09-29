import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ButtonClick from "../button/Button";
import "./Form.css";

function BlogForm() {
  return (
    <Form>
      <Form.Group as={Col} controlId="formGridTitle">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control type="text" placeholder="Enter blog title" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Blog Category</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select the Blog Category</option>
          <option value="1">1.</option>
          <option value="2">2.</option>
          <option value="3">3.</option>
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

export default BlogForm;
