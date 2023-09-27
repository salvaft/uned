import Slide from "./slide.jsx";

function presentation() {
  return (
    <>
      <Slide>
        <p className="capitalize">Ejercicio 7: Evaluación de diseño UX-UI</p>
      </Slide>
      <Slide>
        <h4> Test de usabilidad</h4>
        <p className="text-justify">
          Se trata de un prototipo pequeño y no se usan herramientas externas
          como Maze o UX-Check
        </p>

        <p className="text-justify">
          Basado en observación, revisión de eficacia, eficiencia y satisfacción
        </p>
      </Slide>
      <Slide>
        <h3 className=" !text-slate-200">Puntos clave</h3>
        <ul>
          <li>
            <p className="text-justify">Prueba de usabilidad de producto</p>
          </li>
          <li>
            <p className="text-justify">
              Recolección de infomación con un test en persona
            </p>
          </li>
          <li>
            <p className="text-justify">Aspectos a revisar:</p>
          </li>
        </ul>
        <ul className="text-justify">
          <li className="text-justify">
            <span className="text-teal-400">Eficiencia</span>
          </li>
          <li className="text-justify">
            <span className="text-sky-400">Sencillez</span>
          </li>
          <li className="text-justify">
            <span className="text-yellow-400">Eficacia</span>
          </li>
          <li className="text-justify">
            <span className="text-rose-400">Feedback</span>
          </li>
        </ul>
      </Slide>

      <Slide>
        <Slide>
          <h4>Inicio del test: Landing</h4>
          <p className="text-justify">
            <small>
              <span className="text-sky-400">Sencillez:</span> La usuaria
              prefiere usar un móvil o una app
            </small>
            <small>
              <span className="text-yellow-400">Eficacia:</span> La búsqueda por
              dirección con feedback en el mapa es satisfactoria
            </small>

            <small>
              <span className="text-rose-400">Feedback:</span> Incluir ID del
              parquímetro para un acceso directo si se aparca antes de usar la
              app
            </small>
          </p>
        </Slide>
        <Slide>
          <h4>Selección de parking</h4>
          <p className="text-justify">
            <small>
              <span className="text-rose-400">Feedback:</span> Mapa conceptual
              de plazas{" "}
              <span className="text-rose-400">
                Difícil de implementar, seria necesario análisis de imágenes GIS
                o buscar un proveedor
              </span>
            </small>
          </p>
        </Slide>
        <Slide>
          <h4>Elección de matrícula y tiempo estimado (I/II)</h4>
          <p className="text-justify">
            <small>
              <span className="text-yellow-400">Eficacia:</span> Añadir tiempo
              de estacionamiento es simple y directo
            </small>

            <small>
              <span className="text-rose-400">Feedback:</span> Posibilidad de
              cambiar la matrícula al vuelo:{" "}
              <span className="text-rose-400">
                Implementado, se trata de un input pre-cumplimentado
              </span>
            </small>
            <small>
              <span className="text-teal-400">Eficiencia:</span> La usuaria
              reconoce que la matrícula y el método de pago recordado agiliza el
              proceso
            </small>
          </p>
        </Slide>

        <Slide>
          <h4>Elección de matrícula y tiempo estimado (II/II)</h4>
          <p className="text-justify">
            <small>
              <span className="text-rose-400">Feedback:</span> Estimación del
              precio por hora
            </small>

            <small>
              <span className="text-rose-400">Feedback:</span> Posibilidad de
              cambiar la matrícula al vuelo:{" "}
              <span className="text-rose-400">
                Implementado, se trata de un input pre-cumplimentado
              </span>
            </small>
            <small>
              <span className="text-yellow-400">Eficacia:</span> La usuaria
              reconoce que sería un servicio que usaría y busca en una
              aplicación real para no depender únicamente de parking
              subterráneos
            </small>
          </p>
        </Slide>
      </Slide>
      <Slide>
        <h4>Conclusiones</h4>
        <div className="text-justify">
          <small>
            El test confirma la necesidad de adaptar la versión web móvil o
            nativa
          </small>
          <small>El test confirma un producto mínimo viable </small>
          <small>El usuario no se queda bloqueado en ningún momento </small>
          <small>
            Valioso feedback como la posibilidad de buscar directamente el
            identificador de un parquímetro , el tiempo de llegada al parking
            seleccionado y el precio por hora
          </small>
        </div>
      </Slide>
    </>
  );
}

export default presentation;
