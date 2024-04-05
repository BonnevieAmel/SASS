
const NavBar = ({ mangaList, setMangaIndex}) => {
    
    return (
      <div>
          {mangaList.map((manga, index) => (

            <button key={manga.name} onClick={() => setMangaIndex(index)}>
                {manga.name}
              </button>
          ))}
      </div>
  
    );
  
  };
  
  
  export default NavBar;