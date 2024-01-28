import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies'

function App() {

  const movies = [
    {
      name: "Fellowship of The Ring",
      year: "2001",
      rating: "PG-13",
      image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"

    },
    {
      name: "Weekend at Bernie's",
      year: "1989",
      rating: "PG",
      image: "https://play-lh.googleusercontent.com/3SejCrORtu1UiffcjVCZZp8gwKraPSuhwfzBU5EweV2vw7_309FE5S8K8WOaPxgXVbl-8Xq6KoiMttxNdYKz"

    },
    {
      name: "Ocean's 11",
      year: "2001",
      rating: "PG-13",
      image: "https://m.media-amazon.com/images/S/pv-target-images/7769fa601ed5cad8f704f5051a7e42617de1215ab464fdf033d084f86a517535.jpg"

    },
    {
      name: "Alien",
      year: "1979",
      rating: "R",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg"

    },
    {
      name: "Rambo: 1st blood",
      year: "1986",
      rating: "R",
      image: "https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg"

    },
  ]
  return (
    <div className="App">

      <Movies movies={movies}/>

    </div>
  );
}

export default App;
