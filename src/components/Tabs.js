//

import { Fragment } from "react";

import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import trace from "../helper"

const TAB_LOCAL_STORAGE_NAME = "mxjkbvlsih";

function Tabs() {
   window.onpopstate = (e) => {
      const pathname = document.location.pathname;
      setCurrentTab(pathname);
   };

   const navItemClick = (e) => {
      const pathname = e.target.pathname;
      setCurrentTab(pathname);
   }

   const setCurrentTab = (pathname) => {
      const previousTab = document.querySelector(".nav-item>a.nav-link.active");
      previousTab.classList.remove("active");
      const activeTab = document.querySelector(
         `.nav-item>a.nav-link[href='${pathname}']`
      );
      activeTab.classList.add("active");

      localStorage.setItem(TAB_LOCAL_STORAGE_NAME, pathname);
   };

   const getCurrentTab = () => {
      let tab = localStorage.getItem(TAB_LOCAL_STORAGE_NAME);
      return tab ? tab : document.location.pathname;
   };

   return (
      <Fragment>
         <Nav
            fill
            variant="tabs"
            defaultActiveKey={getCurrentTab}
            className="_nav"
         >
            <Nav.Item>
               <Nav.Link eventKey="disabled" disabled></Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link
                  as={Link}
                  to="/"
                  eventKey="/"
                  onClick={navItemClick}
               >
                  Home
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link
                  as={Link}
                  to="/1"
                  eventKey="/1"
                  onClick={navItemClick}
               >
                  Component 1
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link
                  as={Link}
                  to="/2"
                  eventKey="/2"
                  onClick={navItemClick}
               >
                  Component 2
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="disabled" disabled></Nav.Link>
            </Nav.Item>
         </Nav>
      </Fragment>
   );
}

export default Tabs;
