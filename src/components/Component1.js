//

import { useContext } from "react";

import SubComponentA from "./SubComponentA";
import { StyleContext } from "../context/StyleContext";

function Component1() {
   const styles = useContext(StyleContext);

   return (
      <div style={styles.common}>
         <h2 style={styles.style1}>Component1</h2>
         <SubComponentA />
      </div>
   );
}

export default Component1;
