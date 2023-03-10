import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Trending from './pages/Trending';


function App() {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path=":id" element={<Detail />}/>
        </Route>
        <Route path="/Trending" element={<Trending/>}></Route>

      </Routes>
  );
}

export default App;
