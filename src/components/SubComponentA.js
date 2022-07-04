//

import { useContext } from "react";

import { StyleContext } from "../context/StyleContext";

function SubComponentA() {
   const styles = useContext(StyleContext);
   
   return (
      <div style={styles.common}>
         <h2 style={styles.style3}>SubComponentA</h2>
         <p style={styles.style3}>test</p>
      </div>
   );
}

export default SubComponentA;
