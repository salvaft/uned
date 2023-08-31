import Slide from "./slide.jsx";

function presentation() {
  return (
    <>
      <Slide>
        <p className="capitalize">Ejercicio 6: Prototipado UX/UI con Figma</p>
      </Slide>
      <Slide>
        <h4>Prototipo de una página de parking con flujo de interacción</h4>

        <p className="text-left">
          Aquí en el modo{" "}
          <a
            href="https://www.figma.com/proto/dTrHzz5xgiwDb97e2LKHFw/parking?type=design&node-id=176-299&t=z1NuqNuV8b8J8lLX-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=176%3A299&mode=design"
            target="_blank"
            rel="noreferrer"
          >
            presentación
          </a>{" "}
          y este es el{" "}
          <a
            href="https://www.figma.com/file/dTrHzz5xgiwDb97e2LKHFw/parking?type=design&node-id=329%3A462&mode=design&t=1O1WF6GPg0hUI2AZ-1"
            target="_blank"
            rel="noreferrer"
          >
            recurso
          </a>{" "}
        </p>
        <small className="text-justify">
          En esta presentación se comentan las fuentes utilizadas así como el
          flujo de usuario. En el modo presentación se puede interactuar con la
          página y Figma indica donde se puede hacer click.
        </small>
      </Slide>

      <Slide>
        <h4>Se parte sobre la landing del Ejercicio 2</h4>

        <div className="grid place-content-center">
          <img
            src="/uxui/ejercicio-6/Desktop-1.webp"
            alt="Landing page de Parkineo"
            width={600}
          />
        </div>
        <p className="text-justify">
          <small>
            La imagen del mapa se incorporó usando el plugin Mapsicle. Sin
            embargo, a la hora de realizar el ejercicio 6 dicho plugin ya no
            existe, y se ha utilizado{" "}
            <a
              href="https://www.figma.com/community/plugin/937760472566581732/Figmap"
              target="_blank"
              rel="noreferrer"
            >
              Figmap
            </a>
            .
          </small>
        </p>
      </Slide>
      <Slide>
        <Slide>
          <h4>Iniciar el flujo de navegacion</h4>
          <div className=" grid  place-content-center">
            <img
              src="/uxui/ejercicio-6/Desktop-2.webp"
              alt="Landing page de Parkineo"
              width={500}
            />
          </div>
          <p className="text-justify">
            <small>
              Para iniciar el flujo de navegacion el usuario deberá hacer{" "}
              <i>click</i> sobre el text input box.
            </small>
            <small>
              El campo será autorellenado y estilado. El mapa cambiará a la
              ubicación <i>mocked</i>.
            </small>
          </p>
        </Slide>
        <Slide>
          <h4>
            Selección de parking <i>click</i> sobre el text input box
          </h4>
          <div className="grid place-content-center">
            <img
              src="/uxui/ejercicio-6/Desktop-2.webp"
              alt="Selección del parking en parkineo. Mapa muestra opción 1"
              width={500}
            />
          </div>
          <p className="text-justify">
            <small>
              En esta fase el usuario es presentado con los sitios de
              aparcamiento próximos a su búsqueda. El <i>overlay</i> señala la
              dirección y opciones <i>cliqueables</i> cercanas.
            </small>
            <small>
              La app informa en tiempo real de las plazas disponibles, si no hay
              plazas el usuario no puede pasar a la fase siguiente. En este
              caso, únicamente hay plazas en la Opción 3.
            </small>
          </p>
        </Slide>
        <Slide>
          <h4>El mapa hace scroll con la dirección elegida</h4>
          <div className="grid place-content-center">
            <img
              src="/uxui/ejercicio-6/Desktop-2-2.webp"
              alt="Selección del parking en parkineo. Mapa muestra opción 3"
              width={500}
            />
          </div>
          <p className="text-justify">
            <small>
              En el mapa se puede hacer <i>scroll</i> con el ratón o haciendo{" "}
              <i>click</i> en las distintas opciones. Haciendo click en el boton
              Seleccionar se pasará a la siguiente etapa.
            </small>
          </p>
        </Slide>
      </Slide>
      <Slide>
        <h4>Login del usuario</h4>
        <div className="grid place-content-center">
          <img
            src="/uxui/ejercicio-6/Desktop-3.webp"
            alt="Formulario de login del usuario para reservar plaza una vez seleccionado el emplazamiento"
            width={500}
          />
        </div>
        <p className="text-justify">
          <small>
            Una vez seleccionado el emplazamiento, el usuario deberá
            autentificarse para proceder a la reserva. Para construir el
            formulario se ha usado el recurso{" "}
            <a
              href="https://www.figma.com/community/file/874666139737585846"
              target="_blank"
              rel="noreferrer"
            >
              Form Builder
            </a>
            .
          </small>
          <small>
            Haciendo click en <i>Continua con Google</i> se pasa a la siguiente
            etapa.
          </small>
        </p>
      </Slide>
      <Slide>
        <h4>Selección del tiempo, vehículo y método de pago</h4>
        <div className="grid place-content-center">
          <img
            src="/uxui/ejercicio-6/Desktop-4.webp"
            alt="Formulario de login del usuario para reservar plaza una vez seleccionado el emplazamiento"
            width={500}
          />
        </div>
        <p className="text-justify">
          <small>
            En esta fase se elige el tiempo de estancia, se pide la matrícula
            del vehículo y se debe elegir la tarjeta que será utilizada para el
            pago. Haciendo click en la rueda se puede aumentar el tiempo de
            estancia. Como se puede observar, el prototipo incluye animaciones.
          </small>
        </p>
      </Slide>
      <Slide>
        <Slide>
          <h4>Feedback al usuario</h4>
          <div className="grid place-content-center">
            <img
              src="/uxui/ejercicio-6/Desktop-6.webp"
              alt="Formulario de login del usuario para reservar plaza una vez seleccionado el emplazamiento"
              width={500}
            />
          </div>

          <p className="text-justify">
            <small>Por último, se muestra un resumen de la reserva.</small>
          </p>
        </Slide>
        <Slide>
          <h4>Próximos pasos</h4>
          <ul>
            <li>
              <p className="text-justify">
                <small className="!align-middle">
                  Para afinar el prototipo, se debería incluir una versión movil
                  de la vista web así como de una <i>app</i> nativa.
                </small>
              </p>
            </li>
            <li>
              <p className="text-justify">
                <small className="!align-middle">
                  Las interacciones deben admitir <i>swipes</i> y <i>scrolls</i>{" "}
                  en dispositivos táctiles.
                </small>
              </p>
            </li>
          </ul>
        </Slide>
      </Slide>
    </>
  );
}

export default presentation;
