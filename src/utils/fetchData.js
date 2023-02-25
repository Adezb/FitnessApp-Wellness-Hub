export const exerciseOptions = {
  method: "GET",
  //   URLSearchParams: { muscle: "biceps" },
  headers: {
    "X-RapidAPI-Key": "e863a9a301mshbe7b08079bbdcc8p18fe8ejsncbf49217f20f",

    // "56f4c46b31msh7218f719a81c8bep13d0a3jsn02a0468131b0",

    // import.meta.env.VITE_REACT_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",

    // "exercises-by-api-ninjas.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
