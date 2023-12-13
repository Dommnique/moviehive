import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from '../hooks/useTitle';

export const MovieList = ({apiPath, title}) => {
  const {data : movies} = useFetch(apiPath)

  const pageTitle = useTitle(`${title}`);
  return (
    <main>
      <section className="py-3 max-w-7xl m-auto">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          { movies.map((movie) => { 
            return (
              <Card key={movie.id} movie={movie}/>
            )
          })}
        </div>
      </section>
    </main>
  );
}
