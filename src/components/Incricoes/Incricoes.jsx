import './IncricoesEstilo.css';

export default function incricoes() {
  return (
    <body className="Incricoes">
      <h1>Incrições</h1>
      <div>
        <div className="Imagem">oi</div>
        <form>
          <label htmlFor="">Faça sua inscrição.</label>
          <label htmlFor="">Não perca essa oportunidade</label>
          <input type="text" placeholder="Nome Completo" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="CPF" />
          <button> increver</button>
        </form>
      </div>
      <div className="MaisInformacoes">
        <h2>Mais informações?</h2>
        <p>Acesse nossas reedes sociais</p>
      </div>
    </body>
  );
}
