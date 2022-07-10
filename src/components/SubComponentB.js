/* eslint-disable react/prop-types */
//

function SubComponentB(props) {
  return (
    <div style={props.styles.common}>
      <h2 style={props.styles.style4}>SubComponentB</h2>
      <p style={props.styles.style4}>
        Component2 and SubComponentB are using styles passed down via props
      </p>
    </div>
  );
}

export default SubComponentB;
