//

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Fragment } from "react";
import { Nav } from "react-bootstrap";

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import { StyleContext } from "./context/StyleContext";

import "./App.css";

function App() {
   //
   const styles = {};
   const setSelectedTab = (selection) =>
      localStorage.setItem("selectedTab", selection);
   const getSelectedTab = () => {
      let tab = localStorage.getItem("selectedTab");
      return tab ? tab : "link0";
   };

   return (
      <div className="App">
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
                  <Route path="/" element={<h1>Hello World</h1>} />
                  <Route path="/1" element={<Component1 />} />
                  <Route path="/2" element={<Component2 />} />
               </Routes>
            </StyleContext.Provider>
         </Router>
      </div>
   );
}

export default App;
