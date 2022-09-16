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
    <div className="field is-horizontal ">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>

      <div className="field-body">
        <div style={{ width: "100%" }} className="select is-info">
          <select
            className="container"
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
