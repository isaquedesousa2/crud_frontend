import { useState } from "react";

async function useFetchGet({ url }) {
  const [data, setData] = useState([]);

  await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => setData(response));

  return data;
}

export default useFetchGet;
