import "./Home.css";
import BlogDisplay from "../blogPost/BlogDisplay";
import BlogForm from "../form/Form";

function Home() {
  return (
    <div className="home-container">
      <div className="panel left-panel">
        <BlogForm></BlogForm>
      </div>
      <div className="panel right-panel">
        <BlogDisplay count="6" showMore="true"></BlogDisplay>
      </div>
    </div>
  );
}

export default Home;
