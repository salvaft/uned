import Slide from "../../../src/components/slide.jsx";
import Md from "../../../src/components/markdown.jsx";
import accessibility from "../../md/accessibility.md";
import interface_md from "../../md/interface.md";
import performance from "../../md/performance.md";
import brand from "../../md/brand.md";
import value from "../../md/value.md";
function presentation() {
  return (
    <>
      <Slide>
        <p className="capitalize">
          Accessibilty and usability review of
          <a
            href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/clicsalud/pages/portada.jsf?caducada=1"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            ClickSalud
          </a>
        </p>
      </Slide>
      <Md name={value} external />
      <Md name={brand} external />
      <Slide>
        <h2 className="capitalize">Interface</h2>
        <Md name={interface_md} external />
      </Slide>

      <Slide>
        <h2 className="capitalize">Accessibility</h2>
        <Md name={accessibility} external />
      </Slide>

      <Slide>
        <h2 className="capitalize">Performance</h2>
        <Md name={performance} external />
      </Slide>
    </>
  );
}

export default presentation;
