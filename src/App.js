//
import { useEffect, useState } from "react";
// import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import { StyleContext } from "./context/StyleContext";

import trace from "./helper";

import "./App.css";

function App() {
   const [selTab, setSelTab] = useState("");

   window.onload = function (event) {
      trace("document.location")(document.location);
   };

   window.onpopstate = function (event) {
      // const t = document.querySelector("a.active");
      // if (t) t.classList.remove("active");
      const current = document.location.pathname;
      trace("document.location.pathname")(current);
      setSelectedTab(current);
      const activeTab = document.querySelector(`[href='${current}']`);
      activeTab.classList.add("active");
      // trace("onpopstate :: event.state")(event.state);

      // alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
   };

   const setSelectedTab = (selection) => {
      const selTabs = document.querySelectorAll("a");
      trace('selTabs')(selTabs);
      trace('selTabs.length')(selTabs.length)
      for(let i = 0; i< selTabs.length; i++){
         trace('node')(selTabs[i])
         selTabs[i].classList.remove("active");
      }
      // if (selTabs) selTabs.map(tab => {trace('tab')(tab);return tab.classList.remove("active")});
      localStorage.setItem("selectedTab", selection);
   };

   const getSelectedTab = () => {
      let tab = localStorage.getItem("selectedTab");
      return tab ? tab : "/";
   };

   useEffect(() => {
      // trace('useEffect :: Nav.Link')(Nav.Link.eventKey)
   }, [selTab]);

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
               defaultActiveKey={getSelectedTab}
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
                     id={"t0"}
                     as={Link}
                     to="/"
                     eventKey="/"
                     onClick={(e) => setSelectedTab("/")}
                  >
                     Home
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link
                     href="/1"
                     id={"t1"}
                     as={Link}
                     to="/1"
                     eventKey="/1"
                     onClick={(e) => setSelectedTab("/1")}
                  >
                     Component 1
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link
                     href="/2"
                     id={"t2"}
                     as={Link}
                     to="/2"
                     eventKey="/2"
                     onClick={(e) => setSelectedTab("/2")}
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
