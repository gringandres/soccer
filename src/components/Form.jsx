import React, { useState } from "react";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
import { goToPathnameUrl } from "../utils/helpers";
// import {
//   setTournamentData,
//   getTournamentData,
// } from "../supabase/supabaseFunctions";
import { inputObject, selectObject } from "../utils/helperObjects";
import SelectRender from "./SelectRender";
import InputRender from "./InputRender";
import "../style.css";

const Form = () => {
  const [info, setInfo] = useState({
    idType: "",
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
      idType,
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
      idType &&
      username &&
      id &&
      eps &&
      ciudad &&
      camiseta &&
      pantaloneta &&
      posicion &&
      contacto
    ) {
      // getTournamentData()
      //   .then(({ tournament }) => {
      //     const idFilter = tournament.find(
      //       (idTournament) => idTournament.cc === id
      //     );
      //     if (idFilter) {
      //       setSubmited(true);
      //     } else {
      //       setTournamentData(info);
      //       setSubmited(true);
      //     }
      //   })
      //   .catch((error) => console.log(error));
      console.log("hi");
    } else {
      alert("LLenar todos los campos");
    }
  };

  return (
    <section className="background-banner2">
      {!submited ? (
        <div className="form-container">
          <h2 className="title is-3 team-title">
            LLENA ESTE FORMULARIO PARA LA INSCRIPCIÓN
          </h2>
          <div>
            <section className="form-section box p-5">
              <SelectRender
                label="Identification Type"
                selectValue={info.idType}
                selectName="idType"
                optionValues={["CC", "Passport"]}
                handleInfo={handleInfo}
              />
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
                label="Emergency Contact"
                inputValue={info.contacto}
                inputName="contacto"
                placeholder="Emergency Contact"
                handleInfo={handleInfo}
                type="number"
              />

              <section className="is-flex is-justify-content-center">
                <button
                  className={`${BUTTON_OUTLINE_BLUE} mx-2 button-team-blue`}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className={`${BUTTON_OUTLINE_BLUE} mx-2 button-team-blue`}
                  onClick={() => goToPathnameUrl("/")}
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
            <div className="message-body">You Have Scored a Goal!</div>
          </article>
        </div>
      )}
    </section>
  );
};

export default Form;
