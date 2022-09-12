import React, { useState } from "react";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
import { goToPathnameUrl } from "../utils/helpers";
import { setTournamentData } from "../supabase/supabaseFunctions";
import { inputObject, selectObject } from "../utils/helperObjects";
import SelectRender from "./SelectRender";
import InputRender from "./InputRender";
import "../style.css";

const Form = () => {
  const [info, setInfo] = useState({
    name: "",
    id: "",
    eps: "",
    ciudad: "",
    camiseta: "",
    pantaloneta: "",
    posicion: "",
    contacto: "",
  });
  const [submited, setSubmited] = useState(false);

  const handleInfo = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name: username,
      id,
      eps,
      ciudad,
      camiseta,
      pantaloneta,
      posicion,
      contacto,
    } = info;
    if (
      username &&
      id &&
      eps &&
      ciudad &&
      camiseta &&
      pantaloneta &&
      posicion &&
      contacto
    ) {
      setTournamentData(info);
      setInfo({
        name: "",
        id: "",
        eps: "",
        ciudad: "",
        camiseta: "",
        pantaloneta: "",
        posicion: "",
        contacto: "",
      });
      setSubmited(true);
    } else {
      alert("LLenar todos los campos");
    }
  };

  return (
    <section>
      {!submited ? (
        <div className="form-container">
          <h2 className="title is-3">
            LLENA ESTE FORMULARIO PARA LA INSCRIPCION
          </h2>
          <div>
            <section className="form-section box p-5">
              {inputObject.map((input) => (
                <InputRender
                  key={input.label + 1}
                  label={input.label}
                  inputValue={info[`${input.inputValue}`]}
                  inputName={input.inputName}
                  placeholder={input.placeholder}
                  handleInfo={handleInfo}
                />
              ))}
              {selectObject.map((select) => (
                <SelectRender
                  key={select.label + 1}
                  label={select.label}
                  selectValue={info[`${select.selectValue}`]}
                  selectName={select.selectName}
                  optionValues={select.optionValues}
                  handleInfo={handleInfo}
                />
              ))}
              <InputRender
                label="Contacto de emergencia"
                inputValue={info.contacto}
                inputName="contacto"
                placeholder="Numero de emergencia"
                handleInfo={handleInfo}
                type="number"
              />

              <section className="is-flex is-justify-content-center">
                <button
                  className={`${BUTTON_OUTLINE_BLUE} mx-2`}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className={`${BUTTON_OUTLINE_BLUE} mx-2`}
                  onClick={() => goToPathnameUrl("/tournament")}
                >
                  Cancel
                </button>
              </section>
            </section>
          </div>
        </div>
      ) : (
        <div className="form-success-container">
          <article className="message is-primary text-success">
            <div className="message-body">Se agrego con exito!</div>
          </article>
        </div>
      )}
    </section>
  );
};

export default Form;
