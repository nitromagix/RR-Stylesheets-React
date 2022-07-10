//

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import trace from "../helper";

const CURRENT_TAB_LS_NAME = "mxjkbvlsih";

function NmxTabs() {
   window.onpopstate = (e) => {
      const pathname = document.location.pathname;
      setActiveTab(pathname);
   };

   const navItemClick = (e) => {
      const pathname = e.target.pathname;
      setActiveTab(pathname);
   };

   const setActiveTab = (pathname) => {
      const previousTab = document.querySelector(".nav-item>a.nav-link.active");
      if (previousTab) previousTab.classList.remove("active");
      const activeTab = document.querySelector(
         `.nav-item>a.nav-link[data-rr-ui-event-key='${pathname}']`
      );
      if (activeTab) activeTab.classList.add("active");

      localStorage.setItem(CURRENT_TAB_LS_NAME, pathname);
   };

   const getActiveTab = () => {
      let activeTab = localStorage.getItem(CURRENT_TAB_LS_NAME);
      return activeTab ? activeTab : document.location.pathname;
   };

   return (
      <Fragment>
         <Nav
            fill
            variant="tabs"
            defaultActiveKey={getActiveTab}
            className="_nav"
         >
            <Nav.Item>
               <Nav.Link eventKey="disabled" disabled></Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link as={Link} to="/?x=vnsakjy" eventKey="/" onClick={navItemClick}>
                  Home
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link as={Link} to="/1?x=fhasuli" eventKey="/1" onClick={navItemClick}>
                  Component 1
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link
                  as={Link}
                  to="/2?x=vbsdifh"
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

export default NmxTabs;
