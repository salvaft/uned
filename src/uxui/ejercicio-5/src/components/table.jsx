import "./table.css";
function table() {
  return (
    <table className="tg">
      <thead>
        <tr>
          <th className="tg-0pky">URL</th>
          <th className="tg-0lax">Titulo</th>
          <th className="tg-0lax">Visitas</th>
          <th className="tg-0lax">Tiempo en la página (s)</th>
          <th className="tg-0lax">% de conversión</th>
          <th className="tg-0lax">Veces compartido</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="tg-0lax">adminflix.ddns.net</td>
          <td className="tg-0lax">AdminFlix</td>
          <td className="tg-0lax">580</td>
          <td className="tg-0lax">43</td>
          <td className="tg-0lax">44%</td>
          <td className="tg-0lax">16</td>
        </tr>
        <tr>
          <td className="tg-0lax">adminflix.ddns.net/search</td>
          <td className="tg-0lax">AdminFlix Buscador</td>
          <td className="tg-0lax">360</td>
          <td className="tg-0lax">14</td>
          <td className="tg-0lax">92%</td>
          <td className="tg-0lax">15</td>
        </tr>
        <tr>
          <td className="tg-0lax">adminflix.ddns.net/general</td>
          <td className="tg-0lax">AdminFlix General</td>
          <td className="tg-0lax">214</td>
          <td className="tg-0lax">27</td>
          <td className="tg-0lax">82%</td>
          <td className="tg-0lax">17</td>
        </tr>
        <tr>
          <td className="tg-0lax">adminflix.ddns.net/teletrabajo</td>
          <td className="tg-0lax">AdminFlix Teletrabajo</td>
          <td className="tg-0lax">95</td>
          <td className="tg-0lax">21</td>
          <td className="tg-0lax">85%</td>
          <td className="tg-0lax">9</td>
        </tr>
      </tbody>
    </table>
  );
}

export default table;
