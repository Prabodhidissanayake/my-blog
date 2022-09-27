import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer"
import './Layout.css'

function Layout() {
    return (
      <div className="layout">
        <Header></Header>
        <div className="content"><Outlet></Outlet></div>
        <Footer></Footer>
      </div>
    );
  }
  
  export default Layout;