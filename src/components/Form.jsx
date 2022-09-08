import React, { useState } from "react";
import { BUTTON_OUTLINE_BLUE } from "../constants/style.utils";
const Form = ({ setPageNumber }) => {
  const [info, setInfo] = useState({
    name: "",
    id: "",
    eps: "",
    cuidad: "",
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
    const { name, id, eps, cuidad, camiseta, pantaloneta, posicion, contacto } =
      info;
    if (
      name ||
      id ||
      eps ||
      cuidad ||
      camiseta ||
      pantaloneta ||
      posicion ||
      contacto
    ) {
      console.log(info); // mandar a base de datos
    } else {
      alert("LLenar todos los campos");
    }
  };
  return (
    <section>
      <div className="field is-horizontal ">
        <div className="field-label is-normal">
          <label className="label">Nombre Completo</label>
        </div>
        <div className="field-body">
          <div className="field">
            <input
              className="input is-info"
              style={{ width: "50%" }}
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
              style={{ width: "50%" }}
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
              style={{ width: "50%" }}
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
          <label className="label">Cuidad</label>
        </div>
        <div className="field-body">
          <div className="field">
            <input
              className="input is-info"
              style={{ width: "50%" }}
              type="text"
              placeholder="Cuidad (Solo colombia)"
              value={info.cuidad}
              name="cuidad"
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
          <div className="select is-info">
            <select
              className=""
              value={info.camiseta}
              name="camiseta"
              onChange={handleInfo}
              style={{ width: "40.5vw" }}
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
          <div className="select is-info">
            <select
              className=""
              value={info.pantaloneta}
              name="pantaloneta"
              onChange={handleInfo}
              style={{ width: "40.5vw" }}
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
          <div className="select is-info">
            <select
              className=""
              value={info.posicion}
              name="posicion"
              onChange={handleInfo}
              style={{ width: "40.5vw" }}
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
              style={{ width: "50%" }}
              type="text"
              value={info.contacto}
              name="contacto"
              onChange={handleInfo}
              placeholder="Numero de emergencia"
            />
          </div>
        </div>
      </div>
      <section>
        <button
          className={`${BUTTON_OUTLINE_BLUE} mx-2`}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className={`${BUTTON_OUTLINE_BLUE} mx-2`}
          onClick={() => {
            setPageNumber(0);
          }}
        >
          Cancel
        </button>
      </section>
    </section>
  );
};

export default Form;
