import Card from "react-bootstrap/Card";
import "./BlogItem.css";

function BlogItem() {
  return (
    <Card className="blog-item" style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        src="/home/prabodhi/Projects/my-blog/src/components/watch.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default BlogItem;
