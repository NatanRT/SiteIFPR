import './PalestrantesEstilo.css';
import IFPR from "../../assets/imagemifpr.svg";

export default function Palestrantes() {
  return (
    <div className='containerPalestrantes'>
      <h1>Palestrantes</h1>
      <div className="Palestrantes">
        <div className="CartaoPalestrantes">
        <img src={IFPR} alt="IFPR.svg"/>
          <h3>Humans are much more smarter than AI</h3>
          <p>
            Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet
            consectetur
          </p>
          <a href="">Learn more</a>
        </div>
        <div className="CartaoPalestrantes">
        <img src={IFPR} alt="IFPR.svg"/>
          <h3>Humans are much more smarter than AI</h3>
          <p>
            Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet
            consectetur
          </p>
          <a href="">Learn more</a>
        </div>
        <div className="CartaoPalestrantes">
        <img src={IFPR} alt="IFPR.svg"/>
          <h3>Humans are much more smarter than AI</h3>
          <p>
            Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet
            consectetur
          </p>
          <a href="">Learn more</a>
        </div>
      </div>
      <button>Cronograma</button>
    </div>

  );
}
