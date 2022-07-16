//

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
// import trace from "../helper";

// import trace from "../helper";

const CURRENT_TAB_LS_NAME = "mxjkbvlsik";

function NmxTabs2() {
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
    const previousTab = document.querySelector(".nav-item>a._222.active");
    console.log(previousTab);
    if (previousTab) previousTab.classList.remove("active");
    const activeTab = document.querySelector(
      `.nav-item>a._222[data-rr-ui-event-key='${pathname}']`
    );
    if (activeTab) {
      console.log(activeTab);
      activeTab.classList.add("active");
    }

    // save for page refreshes
    // localStorage.setItem(CURRENT_TAB_LS_NAME, pathname);
  };

  const getActiveTab = () => {
    // for setting tab on page load (app init & page refreshes)
    let activeTab = localStorage.getItem(CURRENT_TAB_LS_NAME);
    return activeTab ? activeTab : document.location.pathname;
  };

  return (
    <Fragment>
      <Nav fill variant="tabs" defaultActiveKey={getActiveTab}>
        {/* <Nav.Item id="searchTab">
            <Nav.Link eventKey="disabled" disabled></Nav.Link>
          </Nav.Item> */}
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/2/0"
            eventKey="/2/0"
            onClick={navItemClick}
            className="_222"
          >
            0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/2/1"
            eventKey="/2/1"
            onClick={navItemClick}
            className="_222"
          >
            1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/2/2"
            eventKey="/2/2"
            onClick={navItemClick}
            className="_222"
          >
            2
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Fragment>
  );
}

export default NmxTabs2;
