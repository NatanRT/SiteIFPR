import './HeaderEstilo.css';
import logo from "../../assets/logo.svg";


export default function header() {
  return (
    <header>
      <div className='logo'>
       <img src={logo} alt="logo.svg"/>
      </div>
      <div className='nav'>
        <a href="">Início</a>
        <a href="">Evento</a>
        <a href="">Palestrantes</a>
        <a href="">Oficinas</a>
        <a href="">Cronograma</a>
        <a href="">Incrições</a>
      </div>
    </header>
  );
}
//
