import React, { useState, useEffect } from "react";
import SelectRender from "./SelectRender";
import InputRender from "./InputRender";
import "../style.css";
import {
  optionValues,
  optionCamiseta,
  optionPantaloneta,
  optionIdtype,
  optionPosicion,
  CAMISETA,
  PANTALONETA,
  IDTYPE,
  POSICION,
} from "../constants/constants";

const Filters = ({
  allPlayerTournament,
  setPopup,
  setTableFiltered,
  setNoResults,
}) => {
  const [valueFilter, setValueFilter] = useState({
    filterValue: "",
    filterSearch: "",
  });

  const [selectValuesToShow, setSelectValuesToShow] = useState([]);

  const handleFilter = (e) => {
    const { value, name } = e.target;
    setValueFilter({ ...valueFilter, [name]: value });
  };

  useEffect(() => {
    switch (valueFilter.filterSearch) {
      case CAMISETA:
        setSelectValuesToShow(optionCamiseta);
        break;
      case PANTALONETA:
        setSelectValuesToShow(optionPantaloneta);
        break;
      case IDTYPE:
        setSelectValuesToShow(optionIdtype);
        break;
      case POSICION:
        setSelectValuesToShow(optionPosicion);
        break;
      default:
        setSelectValuesToShow([]);
    }
  }, [valueFilter.filterSearch]);

  const handleClickFilter = () => {
    if (!valueFilter.filterValue || !valueFilter.filterSearch) {
      alert("llena todos los campos");
      return;
    }
    const playersFiltered = allPlayerTournament.flatMap((player) => {
      if (
        player[`${valueFilter.filterSearch}`]
          .toLowerCase()
          .includes(valueFilter.filterValue.toLowerCase())
      )
        return player;
      return [];
    });

    if (playersFiltered.length > 0) {
      setTableFiltered(playersFiltered);
    } else {
      setNoResults(true);
    }
    setValueFilter({
      filterValue: "",
      filterSearch: "",
    });
    setPopup(false);
  };

  return (
    <div className="filters-popup-container">
      <div className="filters-popup">
        <section>
          <div className="is-flex is-justify-content-space-between is-align-items-center mt-3 ">
            <h2 className="is-size-4">Filters</h2>
            <button
              className="filter-popup-close"
              onClick={() => setPopup(false)}
            >
              &#10006;
            </button>
          </div>
          <div>
            <div className="mt-5">
              <SelectRender
                label="Search for"
                selectValue={valueFilter.filterSearch}
                selectName="filterSearch"
                optionValues={optionValues}
                handleInfo={handleFilter}
              />
            </div>
            {!selectValuesToShow.length > 0 ? (
              <div className="mt-4">
                <InputRender
                  label="Value"
                  inputValue={valueFilter.filterValue}
                  inputName="filterValue"
                  placeholder="Type a value here..."
                  handleInfo={handleFilter}
                />
              </div>
            ) : (
              <div className="mt-4">
                <SelectRender
                  label="Value"
                  inputValue={valueFilter.filterValue}
                  selectName="filterValue"
                  optionValues={selectValuesToShow}
                  handleInfo={handleFilter}
                />
              </div>
            )}
            {/* <div className="mt-4">
              <InputRender
                label="Value"
                inputValue={valueFilter.filterValue}
                inputName="filterValue"
                placeholder=""
                handleInfo={handleFilter}
              />
            </div>
            <div className="mt-4">
              <InputRender
                label="Value"
                inputValue={valueFilter.filterValue}
                inputName="filterValue"
                placeholder=""
                handleInfo={handleFilter}
              />
            </div> */}
            <div className="is-flex is-justify-content-center">
              <button
                className="button button-team-blue px-5 mt-5"
                onClick={handleClickFilter}
              >
                Search
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Filters;
