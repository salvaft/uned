
import { getMovies } from '../utils/movies'
import Card from './card'
import { Link } from 'react-router-dom'

function Pelis() {
  const movies = getMovies()
  const qty = 5
  return (
    <>
      {movies?.length > 0 && movies.slice(0, qty).map((movie) =>
        <Link className='h-full' key={movie.id} to={`/${movie.id}`}>
          <Card movie={movie} >
          </Card>
        </Link>
      )
      }
    </>
  )
}

export default Pelis 
