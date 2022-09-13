import { supabase } from "./supabase.js";

export const getTournamentData = async () => {
  const { data: tournament, error } = await supabase
    .from("tournament")
    .select("*");

  return { tournament, error };
};

export const setTournamentData = async ({
  name,
  id,
  eps,
  ciudad,
  camiseta,
  pantaloneta,
  posicion,
  contacto,
  idType,
}) => {
  const { data, error } = await supabase.from("tournament").insert(
    [
      {
        name,
        cc: id,
        eps,
        ciudad,
        camiseta,
        pantaloneta,
        posicion,
        contacto,
        idType,
      },
    ],
    { returning: "minimal" }
  );

  return { data, error };
};
