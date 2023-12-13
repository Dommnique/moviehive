import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const {data : movies} = useFetch(apiPath, queryTerm);

  const pageTitle = useTitle(`Search results for ${queryTerm}`)

  return (
    <main>
      <div className="text-gray-900 dark:text-white py-3 ml-5 text-2xl">
        <p>{movies.length === 0 ? `No results found for '${queryTerm}'` : `Search Results for '${queryTerm}'`}</p>
      </div>

      <section className="py-3 max-w-7xl m-auto">
        <div className="flex justify-start flex-wrap">
          { movies.map((movie) => { 
            return (
              <Card key={movie.id} movie={movie}/>
            )
          })}
        </div>
      </section>
    </main>
  )
}
