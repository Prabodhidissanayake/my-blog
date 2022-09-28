import "./Home.css";
import BlogDisplay from "../blogPost/BlogsDisplay";
import BlogForm from "../form/Form";


function Home() {
  return (
    <div className="home-container">
      <div className="panel left-panel"> 
      <BlogForm className="form"></BlogForm>
      </div>
      <div className="panel right-panel">
        <BlogDisplay></BlogDisplay>
      </div>
    </div>
  );
}

export default Home;
