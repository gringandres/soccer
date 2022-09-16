// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://savhbqsvantihledrgwh.supabase.co";
// export const supabase = createClient(supabaseUrl, supabaseKey);

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const myHeaders = new Headers();
myHeaders.append("apikey", `${supabaseKey}`);
myHeaders.append("Authorization", `Bearer ${supabaseKey}`);

export const fetchSupabase = () => {
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  const supabaseUrl = import.meta.env.VITE_SUPABASE_GET_URL
  return fetch(supabaseUrl, requestOptions)
}


export const supabasePostData = (info) => {
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(info),
    redirect: 'follow'
  };

  const supabaseUrl = import.meta.env.VITE_SUPABASE_POST_URL
  fetch(supabaseUrl, requestOptions)
}
