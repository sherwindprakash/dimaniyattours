/* eslint-disable no-unused-expressions */
import React from "react";



function RadioButton({ Price, Name, Image, props }) {


    // SEND DATA
    
    // 

    const [value3, setValue3] = React.useState(false);

    const handleChange3 = (e) => {
      if (e.target.checked) {
        setValue3(!value3);
        setValue3(e.target.value);

        props.onChange("123");
        
      } else {
        setValue3(value3);
        setValue3("0");
      }
    };

  return (
      <>
    <div
    style={{
      position: "relative",
    }}
  >
    <label>
      <input
        type="checkbox"
        value={Price}
        onChange={handleChange3}
        className="CheckBox"
      />
      <img
        className="travelImage"
        fetchpriority="low"
        height="300"
        width="300"
        alt={Name}
        title={Name}
        src={
          `http://localhost/admin/storage/uploads/` +
          Image
        }
      />
    </label>
        {value3}

  </div>
  </>
  );
};
export default RadioButton;
