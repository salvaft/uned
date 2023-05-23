import movies from './assets/movies.json'
import Nav from './lib/components/nav'
import Card from './lib/components/card'
function App() {
  const qty = 5
  return (
    <>
      <Nav />
      <main className={`mx-auto grid grid-flow-col justify-around mx-auto w-fit gap-4 my-4`}
      >
        {movies?.length > 0 && movies.slice(0, qty).map((movie) =>
          <Card key={movie.id} title={movie.title} poster={movie.poster_path} >
          </Card>
        )
        }
      </main >
    </>
  )
}

export default App
