/* eslint-disable react/prop-types */
//

import SubComponentB from "./SubComponentB";

function Component2(props) {
  return (
    <div id="component2" style={props.styles.common}>
      <h2 style={props.styles.style2}>Component2</h2>
      <SubComponentB styles={props.styles} />
    </div>
  );
}

export default Component2;
