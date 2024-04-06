import './CronogramaEstilo.css';

export default function Cronograma() {
  return (
    <body className="Cronograma">
      <h1>Cronograma</h1>
      <table>
        <tr>
          <th>Horario/Dia</th>
          <th>07/05/2024</th>
          <th>06/05/2024</th>
          <th>08/05/2024</th>
          <th>09/05/2024</th>
          <th>10/05/2024</th>
        </tr>
        <tr>
          <td>19:30</td>
          <td>Palestra</td>
          <td>Palestra</td>
          <td>Palestra</td>
          <td>Palestra</td>
          <td>Palestra</td>
        </tr>
        <tr>
          <td>20:30</td>
          <td>Intervalo</td>
          <td>Intervalo</td>
          <td>Intervalo</td>
          <td>Intervalo</td>
          <td>Intervalo</td>
        </tr>
        <tr>
          <td>21:00</td>
          <td>Oficina</td>
          <td>Oficina</td>
          <td>Oficina</td>
          <td>Oficina</td>
          <td>Oficina</td>
        </tr>
      </table>
    </body>
  );
}
