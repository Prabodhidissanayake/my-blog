import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function BlogForm() {
  return (
    <Form>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control type="text" placeholder="Enter blog title" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Category</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>1.</option>
          <option>2.</option>
          <option>3.</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Blog Picture</Form.Label>
        <Form.Control type="text" placeholder="Enter blog title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Blog details" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BlogForm;
