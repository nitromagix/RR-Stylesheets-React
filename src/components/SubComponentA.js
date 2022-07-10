//

import { useContext } from "react";

import { StyleContext } from "../context/StyleContext";

function SubComponentA() {
  const styles = useContext(StyleContext);

  return (
    <div style={styles.common}>
      <h2 style={styles.style3}>SubComponentA</h2>
      <p style={styles.style3}>
        Component1 and SubComponentA are using styles passed down via useContext
      </p>
    </div>
  );
}

export default SubComponentA;
