//

// import { useEffect, useState } from "react";
// import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import { StyleContext } from "./context/StyleContext";

import trace from "./helper";

import "./App.css";

const TAB_LOCAL_STORAGE_NAME = "mxjkbvlsih"

function App() {

   window.onpopstate = function (event) {
      const current = document.location.pathname;
      setCurrentTab(current);
   };

   const setCurrentTab = (selection) => {
      const previousTab = document.querySelector('.nav-item>a.nav-link.active');
      previousTab.classList.remove("active");
      const activeTab = document.querySelector(`.nav-item>a.nav-link[href='${selection}']`);
      activeTab.classList.add("active");

      localStorage.setItem(TAB_LOCAL_STORAGE_NAME, selection);
   };

   const getCurrentTab = () => {
      let tab = localStorage.getItem(TAB_LOCAL_STORAGE_NAME);
      return tab ? tab : "/";
   };

   const styles = {
      common: { padding: "10px" },
      style1: {
         color: "navy",
         fontFamily: "'Times New Roman', Times, serif",
         border: "1px solid navy",
      },
      style2: {
         color: "red",
         fontFamily: "'Courier New', Courier, monospace",
         border: "1px solid red",
      },
      style3: {
         color: "green",
         fontFamily:
            "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
         border: "1px solid green",
      },
      style4: {
         color: "grey",
         fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
         border: "1px solid grey",
      },
   };
   // const [key, setKey] = useState('/');
   return (
      <div className="App">
         <header>
            <h1>RR-Stylesheets-React</h1>
         </header>
         <Router>
            <Nav
               fill
               variant="tabs"
               defaultActiveKey={getCurrentTab}
               className="_nav"
               // onSelect={(key) => alert(key)}
               // activeKey={key}
               // onSelect={(k) => setKey(k)}
            >
               <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled></Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link
                     href="/"
                     as={Link}
                     to="/"
                     eventKey="/"
                     onClick={(e) => setCurrentTab("/")}
                  >
                     Home
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link
                     href="/1"
                     as={Link}
                     to="/1"
                     eventKey="/1"
                     onClick={(e) => setCurrentTab("/1")}
                  >
                     Component 1
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link
                     href="/2"
                     as={Link}
                     to="/2"
                     eventKey="/2"
                     onClick={(e) => setCurrentTab("/2")}
                  >
                     Component 2
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled></Nav.Link>
               </Nav.Item>
            </Nav>
            <main>
               <StyleContext.Provider value={styles}>
                  <Routes>
                     <Route
                        path="/"
                        element={
                           <div id="home" style={styles.common}>
                              <h1>Hello World</h1>
                           </div>
                        }
                     />
                     <Route path="/1" element={<Component1 />} />
                     <Route
                        path="/2"
                        element={<Component2 styles={styles} />}
                     />
                  </Routes>
               </StyleContext.Provider>
            </main>
         </Router>
      </div>
   );
}

export default App;
