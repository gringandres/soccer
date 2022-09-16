import {
  optionCamiseta,
  optionPantaloneta,
  optionPosicion,
} from "../constants/constants";

export const selectObject = [
  {
    label: "Shirt size",
    selectValue: "camiseta",
    selectName: "camiseta",
    optionValues: optionCamiseta,
  },
  {
    label: "Shorts size",
    selectValue: "pantaloneta",
    selectName: "pantaloneta",
    optionValues: optionPantaloneta,
  },
  {
    label: "Player posicion",
    selectValue: "posicion",
    selectName: "posicion",
    optionValues: optionPosicion,
  },
];

export const inputObject = [
  {
    label: "Identification",
    inputValue: "cc",
    inputName: "cc",
    placeholder: "Number",
  },
  {
    label: "Full Name",
    inputValue: "name",
    inputName: "name",
    placeholder: "First and Last name",
  },
  {
    label: "EPS",
    inputValue: "eps",
    inputName: "eps",
    placeholder: "EPS",
  },
  {
    label: "City",
    inputValue: "ciudad",
    inputName: "ciudad",
    placeholder: "City (Only colombia)",
  },
];
