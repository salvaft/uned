import Slide from "./slide.jsx";

function presentation() {
  return (
    <>
      <Slide>
        <p className="capitalize">
          Ejercicio 4: Entrevistas
          {/* <a
            target="_blank" href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/clicsalud/pages/portada.jsf?caducada=1"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            ClickSalud
          </a> */}
        </p>
      </Slide>
      <Slide>
        <p>¿Quién es el usuario prototipo?</p>
        <Slide>
          <p>Adminflix</p>
          <p className="text-3xl">
            Según el propio sito web, su objetivo es recopilar contenido
            audiovisual (videos) de canales públicos en YouTube de distintos
            ámbitos dentro de la administración y de manera automática.
            Analizando el contenido mostrado abundan vídeos en normativa y
            ejemplos de aplicación de preveción de riesgos laborales en diversos
            campos de la industria. También ofrece ejemplos de hábitos
            saludables: ergonomía, higiene postural y salud mental. Finalmiente
            promociona la igualdad y la paridad de derechos. El usuario
            prototipo, por tanto, sería un amplio espectro: alguien que puede
            estar formándose en o dedicándose a la prevencion de riesgos en el
            ámbito laboral y que busca información y recursos relacionados con
            la seguridad en el trabajo. También un público mas general que busca
            consejos o recomendaciones para unos hábitos mas saludables en su
            día a día.
          </p>
        </Slide>
        <Slide>
          <p>ClickSalud</p>
          <p className="text-3xl">
            En este caso, se trata de la aplicación web del servicio de salud de
            la comunidad de Andalucía. El usuario prototipo sería, en primer
            lugar, pacientes que quieren gestionar su agenda sanitaria, realizar
            trámites como la elección del médico de familia, consultar su
            historia clínica y obtener documentos oficiales emitidos por los
            profesionales de la salud: resultados de pruebas, bajas laborales,
            certificados de vacunación etc. Debido a la naturaleza electrónica
            de este servicio, el usuario será mayoritariamente &ldquo joven
            &rdquo y con cierta familiaridad con las nuevas tecnologías.
          </p>
        </Slide>
      </Slide>
      <Slide>
        <p>¿Qué información necesitamos conocer de él?</p>
        <Slide>
          <p>Adminflix</p>
          <p className="text-3xl">
            En el caso de Adminflix, la información que más nos beneficiaría
            conocer son sus intereses dentro de los campos ofrecidos. Mostrar
            contenido <it>featured</it> de estos temas facilitaría la
            navegación, la búsqueda de contenido relevante y la fidelización del
            usuario.
          </p>
        </Slide>
        <Slide>
          <p>ClickSalud</p>
          <p className="text-3xl">
            En este caso, que se trata de una aplicación de la administracion
            para hacer gestiones relacionadas con el servicio; la información
            que necesitamos conocer tiene un carácter técnico y que nos permita
            identificar al usuario y verificar su identidad. La posibilidad de
            personalización de la interfaz y la información mostrada sería un
            plus en la sección <it>dashboard</it>, pero reitero que no es el
            objetivo principal de la aplicación. Ofrecer un catálogo amplio y
            similar al de resto de comunidades sería la prioridad, manteniendo
            al mismo tiempo una interfaz sencilla y accesible. Por tanto, una
            identificación del recorrido de usuario y un mapa de experiencia nos
            permitiría identificar los puntos de fricción y mejorar la
            experiencia de usuario de manera general.
          </p>
        </Slide>
      </Slide>
      <Slide>
        <p>¿Qué aplicaciones similares existen?</p>
        <Slide>
          <p>Adminflix</p>
          <p className="text-3xl">
            El nombre delata la inspiración de la aplicación: Netflix. Para el
            caso particular de un contenido en PRL, podemos encontrar por
            ejemplo{" "}
            <a
              target="_blank"
              href="https://prevencion.asepeyo.es/videos-prevencion/"
              rel="noreferrer"
            >
              un recopilatorio de ASEPEYO
            </a>
            , y debido a la naturaleza de la aplicación, también podemos
            encontrar contenido similar en YouTube.
          </p>
        </Slide>
        <Slide>
          <p>ClickSalud</p>
          <p className="text-3xl">
            Debido a que las competencias en materia de salud son transferidas a
            las comunidades autónomas, cada una de ellas tiene su propia
            aplicación. En el caso de Andalucía, la aplicación es muy similar a
            la de otras comunidades como{" "}
            <a
              target="_blank"
              href="https://www.sergas.es/ESaude"
              rel="noreferrer"
            >
              Galicia
            </a>
            .
          </p>
        </Slide>
      </Slide>
      <Slide>
        <p>Mapas de empatía</p>
        <Slide>
          <div className="grid place-content-center">
            <img
              className="h-[34rem]"
              src="/uxui/ejercicio-4/Carmen.webp"
              alt="Mapa de empatía de una persona de 13 años"
            />
          </div>
        </Slide>
        <Slide>
          <div className="grid place-content-center">
            <img
              className="h-[33rem]"
              src="/uxui/ejercicio-4/Yaiza.webp"
              alt="Mapa de empatía de una persona de 25 años"
            />
          </div>
        </Slide>
      </Slide>
      <Slide>
        <p>
          Journey map de{" "}
          <a
            href="http://adminflix.ddns.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adminflix
          </a>
        </p>
        <Slide>
          <img
            src="/uxui/ejercicio-4/Adminflix.webp"
            alt="Mapa de recorrido de usuario de Adminflix"
          />
        </Slide>
      </Slide>
      <Slide>
        <p>
          Blueprint de{" "}
          <a
            href="http://adminflix.ddns.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adminflix
          </a>
        </p>
        <Slide>
          <img
            src="/uxui/ejercicio-4/Adminflix-blueprint.webp"
            alt="Blueprint de Adminflix"
          />
        </Slide>
      </Slide>
    </>
  );
}

export default presentation;
