import Nav from "../lib/components/nav";
import Peliculas from "../lib/components/pelis";

function App() {
  return (
    <>
      <Nav />
      <main
        className={`flex justify-center flex-wrap items-stretch gap-4 my-4`}
      >
        <Peliculas qty={4} />
      </main>
    </>
  );
}

export default App;
