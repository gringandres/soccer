import React from 'react'

const InputRender = ({ label, inputValue, inputName, placeholder, handleInfo }) => {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <input
            className="input is-info"
            type="text"
            placeholder={placeholder}
            value={inputValue}
            name={inputName}
            onChange={handleInfo}
          />
        </div>
      </div>
    </div>
  )
}

export default InputRender