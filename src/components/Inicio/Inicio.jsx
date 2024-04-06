import './InicioEstilo.css';
import IFPR from "../../assets/imagemifpr.svg";

export default function Inicio() {
  return (
    <div className='Inicio'>
      <div className="Texto">
        <h1>Semana da Física e Tecnologia</h1>
        <h4>Inscreva-se</h4>
        <button onclick="">INSCREVA-SE</button>
      </div>
      <div className="Imagem">
      <img src={IFPR} alt="IFPR.svg"/>
      </div>
    </div>
  );
}
