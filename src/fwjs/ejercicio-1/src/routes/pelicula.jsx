import Card from '../lib/components/card'
import {
  useLoaderData,
} from "react-router-dom";
import { getMovie } from '../lib/utils/movies.js'
import { Link } from 'react-router-dom';
import ButtonLink from '../lib/components/button-link.jsx';

export async function loader({ params }) {
  const movie = getMovie(params.id);
  return movie;
}

function pelicula() {
  const movie = useLoaderData();
  return (<div className='h-screen grid place-content-center'>
    {movie && <Card movie={movie}></Card>}

    <Link to={"/"} ><ButtonLink text="Volver" /> </Link>
  </div>
  )
}

export default pelicula
