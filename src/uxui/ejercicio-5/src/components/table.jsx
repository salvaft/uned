import "./table.css";
function table({ data }) {
  return (
    <table className="tg">
      <thead>
        <tr>
          <th className="tg-0pky">URL</th>
          <th className="tg-0lax">Titulo</th>
          <th className="tg-0lax">Visitas</th>
          <th className="tg-0lax">Rebotes</th>
          <th className="tg-0lax">Tiempo en la página (s)</th>
          <th className="tg-0lax">% de conversión</th>
          <th className="tg-0lax">Veces compartido</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => {
          return (
            <tr key={idx}>
              <td className="tg-0lax url">
                <a href={row.url} target="_blank" rel="noreferrer">
                  {row.url}
                </a>
              </td>
              <td className="tg-0lax">{row.title}</td>
              <td className="tg-0lax">{row.visitas}</td>
              <td className="tg-0lax">{row.bounce}</td>
              <td className="tg-0lax">{row.tiempo}</td>
              <td className="tg-0lax">{row.conversion}</td>
              <td className="tg-0lax">{row.compartido}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default table;
