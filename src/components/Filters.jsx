import React, { useState, useEffect } from "react";
import SelectRender from "./SelectRender";
import InputRender from "./InputRender";

import {
  optionValues,
  optionCamiseta,
  optionPantaloneta,
  optionIdtype,
  optionPosicion,
  optionGender,
  CAMISETA,
  PANTALONETA,
  IDTYPE,
  POSICION,
  GENDER,
} from "../constants/constants";

const Filters = ({
  allPlayerTournament,
  setPopup,
  setTableFiltered,
  setNoResults,
}) => {
  const [valueFilter, setValueFilter] = useState({
    filterSearch: "",
    filterValue: "",
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
      case GENDER:
        setSelectValuesToShow(optionGender);
        break;
      default:
        setSelectValuesToShow([]);
    }
  }, [valueFilter.filterSearch]);

  useEffect(() => {
    setValueFilter({ ...valueFilter, filterValue: "" });
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
    <div>
      <div>
        <section>
          <div>
            <h2>Filters</h2>
            <button onClick={() => setPopup(false)}>&#10006;</button>
          </div>
          <div>
            <div>
              <SelectRender
                label="Search for"
                selectValue={valueFilter.filterSearch}
                selectName="filterSearch"
                optionValues={optionValues}
                handleInfo={handleFilter}
              />
            </div>
            {!selectValuesToShow.length > 0 ? (
              <div>
                <InputRender
                  label="Value"
                  inputValue={valueFilter.filterValue}
                  inputName="filterValue"
                  placeholder="Type a value here..."
                  handleInfo={handleFilter}
                />
              </div>
            ) : (
              <div>
                <SelectRender
                  label="Value"
                  inputValue={valueFilter.filterValue}
                  selectName="filterValue"
                  optionValues={selectValuesToShow}
                  handleInfo={handleFilter}
                />
              </div>
            )}
            <div>
              <button onClick={handleClickFilter}>Search</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Filters;
