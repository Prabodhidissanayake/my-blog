import "./Home.css";
import BlogDisplay from "../blogPost/BlogDisplay";
import BlogForm from "../form/Form";
import ButtonClick from "../button/Button";

function Home() {
  return (
    <div className="home-container">
      <div className="panel left-panel">
        <BlogForm></BlogForm>
        <ButtonClick></ButtonClick>
      </div>
      <div className="panel right-panel">
        <BlogDisplay count="4"></BlogDisplay>
        <ButtonClick className="blog-btn"></ButtonClick>
      </div>
    </div>
  );
}

export default Home;
