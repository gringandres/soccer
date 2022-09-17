import React, { useState, useContext } from "react";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
import { goToPathnameUrl } from "../utils/helpers";
import { inputObject, selectObject } from "../utils/helperObjects";
import SelectRender from "./SelectRender";
import InputRender from "./InputRender";
import "../style.css";
import { optionIdtype } from "../constants/constants";
import bird from "../svg/teamIcon2.png";
import { supabasePostData, fetchSupabase } from "../supabase/supabase";
import { NewPlayerContext } from "../provider/NewPlayerProvider";

const Form = () => {
  const [info, setInfo] = useState({
    idType: "",
    name: "",
    cc: "",
    eps: "",
    ciudad: "",
    camiseta: "",
    pantaloneta: "",
    posicion: "",
    contacto: "",
  });
  const [submited, setSubmited] = useState(false);
  const { setIsNewPlayer } = useContext(NewPlayerContext)

  const handleInfo = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      idType,
      name: username,
      cc,
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
      cc &&
      eps &&
      ciudad &&
      camiseta &&
      pantaloneta &&
      posicion &&
      contacto
    ) {
      fetchSupabase()
        .then((res) => res.json())
        .then((res) => {
          const idFilter = res.find((idTournament) => idTournament.cc === cc);
          if (idFilter) {
            setSubmited(true);
          } else {
            supabasePostData(info);
            setIsNewPlayer(true)
            setSubmited(true);
            // setTimeout(() => setIsNewPlayer(false), 0);
          }
        })
        .catch((error) => console.log(error));
    } else {
      alert("LLenar todos los campos");
    }
  };

  return (
    <section className="background-banner2">
      {!submited ? (
        <div className="form-container">
          <h2 className="title is-3 team-title">
            FILL THE FORM FOR THE INSCRIPTION
          </h2>
          <div>
            <section className="form-section box p-5">
              <SelectRender
                label="Identification Type"
                selectValue={info.idType}
                selectName="idType"
                optionValues={optionIdtype}
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
                placeholder="Emergency Name and Number"
                handleInfo={handleInfo}
                type="text"
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
        <>
          <div className="form-success">
            <img src={bird} className="team-bird" />
            <article className="message is-primary text-success">
              <div className="message-body">You Have Scored a Goal!</div>
            </article>
          </div>
        </>
      )}
    </section>
  );
};

export default Form;
