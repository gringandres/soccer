import React from "react";
import { IDTYPE } from "../constants/constants";
const SelectRender = ({
  label,
  selectValue,
  selectName,
  optionValues,
  handleInfo,
}) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>

      <div>
        <div style={{ width: "100%" }}>
          <select
            value={selectValue}
            name={selectName}
            onChange={handleInfo}
            style={{ width: "100%" }}
          >
            <option value="empty"></option>
            {optionValues.map((option, index) => (
              <option
                key={index}
                value={option === IDTYPE ? IDTYPE : option.toLowerCase()}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectRender;
