import './OficinasEstilo.css';

export default function () {
  return (
    <div className='containerOficinas'>
      <h1>Ofícinas</h1>
      <div className="Oficinas">
        <button > Esquerda </button>
        <div className="CartaoOficinas">
          <p>Oficina 1</p>
          <p>
            Descrição da Oficina de exemplo. Ministrada pelo professor Exemplo
          </p>
          <div>
            {/* <img src="" alt=""> */}
            <p>Professora Exemplo</p>
            <p>Doutora</p>
          </div>
        </div>

        <div className="CartaoOficinas">
          <p>Oficina 1</p>
          <p>
            Descrição da Oficina de exemplo. Ministrada pelo professor Exemplo
          </p>
          <div>
            {/* <img src="" alt=""> */}
            <p>Professora Exemplo</p>
            <p>Doutora</p>
          </div>
        </div>
        <button > Direita </button>
      </div>
    </div>
  );
}
