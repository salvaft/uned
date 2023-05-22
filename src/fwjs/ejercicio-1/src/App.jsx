import movies from './assets/movies.json'
import Nav from './lib/components/nav'
import Card from './lib/components/card'
function App() {
  return (
    <>
      <Nav />
      <main className='flex gap-4'>
        {movies?.length > 0 && movies.slice(0, 5).map((movie) =>
          <Card key={movie.id} title={movie.title} text={movie.overview}>
          </Card>
        )}
      </main>
    </>
  )
}

export default App
