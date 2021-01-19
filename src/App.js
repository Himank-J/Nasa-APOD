import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import NasaPhotos from "./components/NasaPhotos";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route component={Home} path="/" exact />  
        <Route component={NasaPhotos} path="/nasaphotos" />
      </div>
    </BrowserRouter>
  );
}

export default App;
