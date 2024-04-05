import React from 'react';
import Card from './components/Card.jsx';
import './components/Card.scss';
import { useState } from "react";
import NavBar from './components/NavBar.jsx';

const mangaList = [
  {
      name: "Naruto",
      imgSrc:
        "https://image.animationdigitalnetwork.fr/license/naruto/tv2/web/affiche_500x0.jpg",
    },
    {
      name: "Death Note",
      imgSrc:
        "https://bdi.dlpdomain.com/serie/visuel/BDA_20069/1-M480x680.jpg",
    },
    {
      name: " Attack on Titan ",
      imgSrc:
        "https://m.media-amazon.com/images/I/713JPi6+CkL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "Hunter X Hunter",
      imgSrc:
        "https://www.abystyle.com/4669391-large_default/hunter-x-hunter-poster-brigade-fantome-915-x-61-cm.jpg",
    },
    {
      name: "GTO",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUyVzTlRsTbQQkRBL2RSYnjVasIAxVDOb4O_Cf_vpqsw&s",
    },
  ];

  function App() {

    const [mangaIndex, setMangaIndex] = useState(0);
  
  return (
    <div className='Card-container'>
      <h1>{"Choose your favorite manga"}</h1>
      <Card manga={mangaList[mangaIndex]}/>
      <NavBar mangaList={mangaList} setMangaIndex={setMangaIndex} />
    </div>
  );
}

export default App;
