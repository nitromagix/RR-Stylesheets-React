//

// import { useEffect, useState } from "react";
// import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NmxTabs from "./components/NmxTabs";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import { StyleContext } from "./context/StyleContext";

// import trace from "./helper";

import "./App.css";

function App() {


   const styles = {
      common: { padding: "15px" },
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

   return (
      <div className="App">
         <header>
            <h1>RR-Stylesheets-React</h1>
         </header>
         <Router>
            <NmxTabs />
            <main>
               <StyleContext.Provider value={styles}>
                  <Routes>
                     <Route
                        path="/"
                        element={
                           <div id="home" >
                              <h1 style={styles.common}>Hello World</h1>
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
