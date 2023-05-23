import Nav from '../lib/components/nav'
import Peliculas from '../lib/components/pelis'

function App() {
  return (
    <>
      <Nav />
      <main className={`mx-auto grid grid-flow-col justify-around items-stretch w-fit gap-4 my-4`}>
        <Peliculas />
      </main >
    </>
  )
}

export default App
