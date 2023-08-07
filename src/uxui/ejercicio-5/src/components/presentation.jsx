import Slide from "./slide.jsx";
import Tabla from "./table.jsx";
import tAdminflix from "../Table_data/adminflix.json";
import tClickSalud from "../Table_data/clicksalud.json";

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
          <Tabla data={tAdminflix} />
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
      <Slide>
        <p>
          Flujos de navegación de ClickSalud para la agenda sanitaria (Mocked)
        </p>
        <Slide>
          <Tabla data={tClickSalud} />
        </Slide>
        <Slide>
          <p>
            Con más de un millón de visitas diarias, se estima que más de la
            mitad de los afiliados a la seguridad social por Andalucía usa el
            servicio ClicSalud para sus gestiones relacionadas con la atención
            primaria. Una conversión del 95% y un tiempo de estancia
            relativamente bajo indica la facilidad de los usuarios para moverse
            por los diferentes servicios.
          </p>
        </Slide>
        <Slide>
          <p>
            En segundo lugar en visitas, y siendo el servicio más utilizado, es
            el de cita telemática. El porcentaje de conversion muestra que el
            95% de los usuarios que acceden a la página, comienzan el proceso.
            Es también la página más veces compartida, dando a intuir que los
            usuarios la encuentran útil y recomendan el uso a los demás.
          </p>
        </Slide>

        <Slide>
          <p>
            La concertación de nuevas citas está seguida de muy cerca de la
            gestión de citas existentes. Números muy similares respecto al
            servicio anterior, indicaría que los usuarios revisan sus citas tras
            haber concertado una nueva, y que no solo la conversión anterior
            muestra que se empieza un proceso de nueva cita sino que también se
            termina.
          </p>
        </Slide>
        <Slide>
          <p>
            Por último, la consulta de lista de espera quirúrgica es un servicio
            más específico y que cuenta con el menor número de visitas. El
            tiempo de estancia, el alto bounce ratio y la relativa baja
            conversion con respecto a los otros servicios, indican que algunos
            usuarios puedan no entender de que se trata inicialmente.
          </p>
        </Slide>
      </Slide>
    </>
  );
}

export default presentation;
