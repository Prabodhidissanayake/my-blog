import { Outlet } from "react-router-dom";

function Layout() {
    return (
      <div className="App">
        Layouts
        <Outlet></Outlet>
      </div>
    );
  }
  
  export default Layout;