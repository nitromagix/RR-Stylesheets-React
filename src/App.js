//

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Fragment } from "react";
import { Nav } from "react-bootstrap";

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import { StyleContext } from "./context/StyleContext";

import "./App.css";

function App() {
   //
   const styles = {
      common: { padding: "30px" },
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
   const setSelectedTab = (selection) =>
      localStorage.setItem("selectedTab", selection);
   const getSelectedTab = () => {
      let tab = localStorage.getItem("selectedTab");
      return tab ? tab : "link0";
   };

   return (
      <div className="App">
         <header>
            <h1>RR-Stylesheets-React</h1>
         </header>
         <Router>
            <Nav
               fill
               variant="tabs"
               defaultActiveKey={getSelectedTab()}
               className="_nav"
            >
               <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled></Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link
                     // href="#link0"
                     as={Link}
                     to="/"
                     eventKey="link0"
                     onClick={(e) => setSelectedTab("link0")}
                  >
                     Home
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link
                     // href="#link1"
                     as={Link}
                     to="/1"
                     eventKey="link1"
                     onClick={(e) => setSelectedTab("link1")}
                  >
                     Component 1
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link
                     // href="#link2"
                     as={Link}
                     to="/2"
                     eventKey="link2"
                     onClick={(e) => setSelectedTab("link2")}
                  >
                     Component 2
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled></Nav.Link>
               </Nav.Item>
            </Nav>
            <StyleContext.Provider value={styles}>
               <Routes>
                  <Route
                     path="/"
                     element={
                        <div style={styles.common}>
                           <h1>Hello World</h1>
                        </div>
                     }
                  />
                  <Route path="/1" element={<Component1 />} />
                  <Route path="/2" element={<Component2 styles={styles} />} />
               </Routes>
            </StyleContext.Provider>
         </Router>
      </div>
   );
}

export default App;
