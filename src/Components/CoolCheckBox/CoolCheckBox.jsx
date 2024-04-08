/* eslint-disable react/prop-types */
import "./CoolCheckBox.css";

function CoolCheckBox({onChange, name, value, id}) {
  return (
    <>
      <input name={name} value={value} id={id} onChange={onChange} type="checkbox" className="ui-checkbox"></input>
    </>
  );
}

export default CoolCheckBox;
