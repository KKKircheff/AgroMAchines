import React, {  useEffect } from 'react';
import './App.scss';
import AOS from 'aos';
import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
// import { Item } from './application-data/navbar-config';
import { items } from './application-data/navbar-config';
import { TogglerProvider } from "./context/viewport-context"



function App() {

    useEffect(() => {
      AOS.init({ duration: 800 });
      AOS.refresh();
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    }, []);

    return (
      <div className="App">
        <TogglerProvider>
          <Routes>
            <Route path='/' element={<Navigation items={items} />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </TogglerProvider>
      </div>
    )
  }

  export default App;
