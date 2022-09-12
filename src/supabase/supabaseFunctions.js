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
}) => {
  const { data, error } = await supabase
    .from("tournament")
    .insert(
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
        },
      ],
      { returning: "minimal" }
    );

  return { data, error };
};
