import movies from './assets/movies.json'
import Nav from './lib/components/nav'
import Card from './lib/components/card'
function App() {
  return (
    <>
      <h1 class="text-6xl font-bold underline">
        Hello world!
      </h1>
      <Nav />
      <main className='grid grid-flow-col grid-cols-5'
      >
        {movies?.length > 0 && movies.slice(0, 5).map((movie) =>
          <Card key={movie.id} title={movie.title} >
          </Card>
        )
        }
      </main >
    </>
  )
}

export default App
