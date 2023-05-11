import React from 'react';
import Navigation from './components/Navigation/Navigation.component';
import './App.scss';

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
      <Navigation items={items} />
    </div>
  )
}

export default App;
