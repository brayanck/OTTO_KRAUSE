import Componentes from './componentes/Componentes';
import './App.css';
import Carrusel from './componentes/Carrusel';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
	return (
    <div className='bg'>
      <Componentes/>
    <Carrusel/>
    </div>
		
	);
}

export default App;