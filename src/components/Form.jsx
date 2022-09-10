import React, { useState } from "react";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
import { goToPathnameUrl } from "../utils/helpers";
import { setTournamentData } from "../supabase/supabaseFunctions";

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
  const handleInfo = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name: username, id, eps, ciudad, camiseta, pantaloneta, posicion, contacto } = info;
    if (username && id && eps && ciudad && camiseta && pantaloneta && posicion && contacto) {
      setTournamentData(info)
      setInfo({
        name: "",
        id: "",
        eps: "",
        ciudad: "",
        camiseta: "",
        pantaloneta: "",
        posicion: "",
        contacto: "",
      })
    } else {
      alert("LLenar todos los campos");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          placeContent: "center",
          height: "100vh",
        }}
      >
        <h2 style={{ textAlign: "center" }} className="title is-3"> LLENA ESTE FORMULARIO PARA LA INSCRIPCION</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr 1fr" }}>
          <section className="box p-5" style={{ gridColumn: "2" }}>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Nombre Completo</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <input
                    className="input is-info"
                    type="text"
                    placeholder="Nombre"
                    value={info.name}
                    name="name"
                    onChange={handleInfo}
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal ">
              <div className="field-label is-normal">
                <label className="label">ID</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <input
                    className="input is-info"
                    type="text"
                    placeholder="ID (Passport o cc)"
                    value={info.id}
                    name="id"
                    onChange={handleInfo}
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal ">
              <div className="field-label is-normal">
                <label className="label">EPS</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <input
                    className="input is-info"
                    type="text"
                    placeholder="EPS"
                    value={info.eps}
                    name="eps"
                    onChange={handleInfo}
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal ">
              <div className="field-label is-normal">
                <label className="label">ciudad</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <input
                    className="input is-info"
                    type="text"
                    placeholder="ciudad (Solo colombia)"
                    value={info.ciudad}
                    name="ciudad"
                    onChange={handleInfo}
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal ">
              <div className="field-label is-normal">
                <label className="label">Talla Camiseta</label>
              </div>

              <div className="field-body">
                <div style={{ width: '100%' }} className="select is-info">
                  <select
                    className="container"
                    value={info.camiseta}
                    name="camiseta"
                    onChange={handleInfo}
                    style={{ width: "100%" }}
                  >
                    <option value="empty"></option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field is-horizontal ">
              <div className="field-label is-normal">
                <label className="label">Talle Pantaloneta</label>
              </div>
              <div className="field-body">
                <div style={{ width: '100%' }} className="select is-info">
                  <select
                    className=""
                    value={info.pantaloneta}
                    name="pantaloneta"
                    onChange={handleInfo}
                    style={{ width: '100%' }}
                  >
                    <option value="empty"></option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field is-horizontal ">
              <div className="field-label is-normal">
                <label className="label">Posicion de Juego</label>
              </div>
              <div className="field-body">
                <div style={{ width: '100%' }} className="select is-info">
                  <select
                    className=""
                    value={info.posicion}
                    name="posicion"
                    onChange={handleInfo}
                    style={{ width: '100%' }}
                  >
                    <option value="empty"></option>
                    <option value="arquero">Arquero</option>
                    <option value="defensa">Defensa</option>
                    <option value="centro">Centro</option>
                    <option value="delantero">Delantero</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field is-horizontal ">
              <div className="field-label is-normal">
                <label className="label">Contacto de emergencia</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <input
                    className="input is-info"
                    type="text"
                    value={info.contacto}
                    name="contacto"
                    onChange={handleInfo}
                    placeholder="Numero de emergencia"
                  />
                </div>
              </div>
            </div>

            <section
              style={{ marginLeft: '6rem' }}
              className="is-flex is-justify-content-center">
              <button
                className={`${BUTTON_OUTLINE_BLUE} mx-2`}
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className={`${BUTTON_OUTLINE_BLUE} mx-2`}
                onClick={() => goToPathnameUrl('/tournament')}
              >
                Cancel
              </button>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Form;
