import React from "react";

const InputRender = ({
  label,
  inputValue,
  inputName,
  placeholder,
  handleInfo,
  type = "text",
}) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <div>
          <input
            type={type}
            placeholder={placeholder}
            value={inputValue}
            name={inputName}
            onChange={handleInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default InputRender;
