//

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
// import trace from "../helper";

// import trace from "../helper";

// const CURRENT_TAB_LS_NAME = "mxjkbvlsih";

function NmxTabs() {
  // eslint-disable-next-line no-unused-vars
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

    // save for page refreshes
    // localStorage.setItem(CURRENT_TAB_LS_NAME, pathname);
  };

  const getActiveTab = () => {
    // for setting tab on page load (app init & page refreshes)
    // let activeTab = localStorage.getItem(CURRENT_TAB_LS_NAME);
    // return activeTab ? activeTab : document.location.pathname;
    return document.location.pathname;
  };

  return (
    <Fragment>
      <div className="_nav">
        <Nav fill variant="tabs" defaultActiveKey={getActiveTab}>
          <Nav.Item id="searchTab">
            <Nav.Link eventKey="disabled" disabled>
              {" "}
              <strong>NMX</strong>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item id="searchTab"></Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/?x=vnsakjy"
              eventKey="/"
              onClick={navItemClick}
            >
              HOME
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/1?x=fhasuli"
              eventKey="/1"
              onClick={navItemClick}
            >
              HERE
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/2?x=vbsdifh"
              eventKey="/2"
              onClick={navItemClick}
            >
              THERE
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item id="searchTab">
            <Nav.Link eventKey="disabled" disabled></Nav.Link>
          </Nav.Item> */}
        </Nav>
      </div>
    </Fragment>
  );
}

export default NmxTabs;
