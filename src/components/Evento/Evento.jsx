import './EventoEstilo.css';
import IFPR from "../../assets/imagemifpr.svg";

export default function () {
  return (
    <div className="Evento">
      <h1>O EVENTO</h1>
      <p>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
      <div className='GridEvento'>
        <div className="Imagens">
        <img src={IFPR} alt="IFPR.svg"/>
        <img src={IFPR} alt="IFPR.svg"/>
        <img src={IFPR} alt="IFPR.svg"/>
        </div>
        <div className="EventoItems">
          <ul>
            <li>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </li>
            <li>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </li>
            <li>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </li>
            <li>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </li>
          </ul>
          <button onClick="">INCREVA-SE</button>
        </div>
      </div>
      <div className='NossasParcerias'>
        <h1>Nossa Parcerias</h1>
      </div>
      <div className="Parcerias">
      <img src={IFPR} alt="IFPR.svg"/>
      <img src={IFPR} alt="IFPR.svg"/>
      <img src={IFPR} alt="IFPR.svg"/>
      <img src={IFPR} alt="IFPR.svg"/>
      </div>
    </div>
  );
}
