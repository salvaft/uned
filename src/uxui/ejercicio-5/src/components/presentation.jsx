import Slide from "./slide.jsx";
import Tabla from "./table.jsx";

function presentation() {
  return (
    <>
      <Slide>
        <p className="capitalize">
          Ejercicio 5: Arquitectura de la información
        </p>
      </Slide>
      <Slide>
        <Slide>
          <p>Card sorting de una página de tatuajes</p>
        </Slide>
        <Slide>
          <p>Resultado de un Open Card Sorting a un usuario modelo</p>
          <img
            src="/uxui/ejercicio-5/sorted-cards.webp"
            alt="Resultado de un Open Card Sorting de una página de tatuajes"
          />
        </Slide>
      </Slide>
      <Slide>
        <Slide>
          <p>Site maps</p>
        </Slide>

        <Slide>
          <p>Adminflix</p>
          <div className="grid place-content-center">
            <img
              className="h-[33rem]"
              src="/uxui/ejercicio-5/adminflix.svg"
              alt="Site map de Adminflix"
            />
          </div>
        </Slide>
        <Slide>
          <p>ClickSalud</p>
          <img
            src="/uxui/ejercicio-5/clicksalud.svg"
            alt="Site map de ClickSalud"
          />
        </Slide>
      </Slide>
      <Slide>
        <p>Flujos de navegación de Adminflix (Mocked)</p>
        <Slide>
          <Tabla />
        </Slide>
        <Slide>
          <p>
            Los flujos de navegación indican que el 44% de usuarios que llegan a
            la página usan el buscador, el cual es el objetivo prioritario por
            delante de acceder a los vídeos directamente. Después de acceder al
            buscador, un 92% hace una búsqueda, por lo que se trata de un
            porcentaje de conversión muy bueno.
          </p>
        </Slide>
        <Slide>
          <p>
            En segundo lugar, el 82% de los usuarios que acceden al
            recopilatorio &quotgeneral&quot, acceden a los vídeos. La siguiente
            categoría por orden de interés es la de teletrabajo, con un 85% de
            usuarios llegando a ver al menos un vídeo.
          </p>
        </Slide>

        <Slide>
          <p>
            Sin embargo, el tiempo medio que pasan los usuarios indican que los
            vídeos no se ven completos (ni siquiera uno), por lo que se debería
            analizar si el contenido es demasiado largo o si el contenido no es
            de interés para los usuarios.
          </p>
        </Slide>
        <Slide>
          <p>
            Por último, todas las páginas auditadas han sido compartidas, por lo
            que aunque no sean números muy altos, los propios usuarios
            contribuyen a la difusión de la página.
          </p>
        </Slide>
      </Slide>
    </>
  );
}

export default presentation;
