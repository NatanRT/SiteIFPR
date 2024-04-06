import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import Evento from './components/Evento/Evento';
import Palestrantes from './components/Palestrantes/Palestrantes';
import Oficinas from './components/Oficinas/Oficinas';
import Cronograma from './components/Cronograma/Cronograma';
import Incricoes from './components/Incricoes/Incricoes';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Inicio />
        <Evento />
        <Palestrantes />
        <Oficinas />
        <Cronograma />
        <Incricoes />
        <Footer />
      </div>
    </>
  );
}
export default App;
