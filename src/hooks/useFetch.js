import { useState, useEffect } from "react"

export const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=85b4547cee9ac782e942bc6fab53151c&query=${queryTerm}`

  useEffect(() => {
    async function fetchMovies(){
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results)
    }
    fetchMovies();
  }, [url])

  return { data };
}
