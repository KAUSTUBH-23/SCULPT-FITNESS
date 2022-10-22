import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Alert from './components/Alert';
import { useState } from 'react';
import Care from './components/Care';
import CareTestItem from './components/CareTestItem';
import Mind from './components/Mind';
import MindTherapyItem from './components/MindTherapyItem';
import Store from './components/Store';
import StoreMenTshirt from './components/StoreMenTshirt';
import StoreItem from './components/StoreItem';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <BrowserRouter>
        <Alert alert={alert} />
        <div className='app-container'>
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/register" element={<Register showAlert={showAlert} />} />
            <Route exact path="/care" element={<Care showAlert={showAlert} />} />
            <Route exact path="/care/:careTestId" element={< CareTestItem />} />
            <Route exact path="/mind" element={<Mind showAlert={showAlert} />} />
            <Route exact path="/mind/:mindTherapyId" element={< MindTherapyItem />} />
            <Route exact path="/store" element={<Store showAlert={showAlert} />} />
            <Route exact path="/store/menTshirt" element={<StoreMenTshirt showAlert={showAlert} />} />
            <Route exact path="/store/:storeItemId" element={< StoreItem />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
