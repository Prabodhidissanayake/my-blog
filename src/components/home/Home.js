import "./Home.css";
import BlogDisplay from "../blogPost/BlogDisplay";
import BlogForm from "../form/Form";
import ButtonClick from "../btn/Btn";

function Home() {
  return (
    <div className="home-container">
      <div className="panel left-panel">
        <BlogForm></BlogForm>
        <ButtonClick></ButtonClick>
      </div>
      <div className="panel right-panel">
        <BlogDisplay count="6" showMore="true"></BlogDisplay>
      </div>
    </div>
  );
}

export default Home;
