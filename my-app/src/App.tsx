import React from 'react';
import './App.scss';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.component';
import Gallery from './routes/gallery/Gallery.component';
import Contact from './routes/contact/Contact.component';



export interface Item {
  name: string;
  url?: string;
  children?: Item[];
}

const items: Item[] = [
  { name: 'за нас', url: '/' },
  { name: 'поливни макари', url: '/' },
  { name: 'високонапорни помпи', url: '/' },
  { name: 'галерия', url: '/gallery' },
  { name: 'контакт', url: '/contact' },
];
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation items={items} />}>
          <Route index element={<Home/>} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
