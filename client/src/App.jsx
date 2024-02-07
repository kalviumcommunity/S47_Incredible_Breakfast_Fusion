import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from "./page/home";
import Forms from "./page/Form";
import UpdateFood from "./page/UpdateFood";

function App(){

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/weird' element={<Forms/>}></Route>
          <Route path='/update/:id' element={<UpdateFood/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
