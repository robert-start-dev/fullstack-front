
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './layout/navbar';
import Home from './pages/home';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>

    </div>
  );
}

export default App;
