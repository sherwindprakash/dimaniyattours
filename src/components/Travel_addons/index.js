/* eslint-disable no-unused-expressions */
import React from "react";

function RadioButton({ Price, Name, Image, Index }) {
  const [value3, setValue3] = React.useState(false);

  const handleChange3 = (e) => {
    if (e.target.checked) {
      setValue3(!value3);
      setValue3(e.target.value);
    } else {
      setValue3(value3);
      setValue3("0");
    }
  };

  // SEND DATA
  //

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <label key={Index + `_Radio`}>
          <input
            type="checkbox"
            value={Price}
            onChange={handleChange3}
            className="CheckBox"
            name={Index + `_RadioName`}
          />
          <img
            className="travelImage"
            fetchpriority="low"
            height="300"
            width="300"
            alt={Name}
            title={Name}
            src={
              `http://localhost/dimaniyattours_api/admin/admin/storage/uploads/` +
              Image
            }
          />
        </label>
        {value3}
      </div>
    </>
  );
}
export default RadioButton;
