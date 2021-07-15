
import './App.css';
import './components/Header/header';
import Header from './components/Header/header';
import './components/Technologies/technologies'
import Technologies from './components/Technologies/technologies';



const App = () => {
  return (
    <div className="App">
      <Header/>
      <Technologies/>
      
    </div>
  );
}

export default App;
