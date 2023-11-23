import './App.css';
import './Components/Lucas.css'
import Lucas from './Components/Lucas'
import Eventos from './Components/Eventos';
import Propriedades from './Components/Propriedades';



function App() {
  return (
    <div className="App">
        <Lucas /> 
        <Propriedades nome="Lucas"/>
        <img src="https://4kwallpapers.com/images/walls/thumbs_2t/7066.jpg" alt="Halo" />
        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/13367.jpeg" alt="Infinite" /> 
        <Eventos />
    
    </div>
  );
}

export default App;
