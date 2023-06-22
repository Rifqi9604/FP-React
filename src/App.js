import './App.css';
import { getMovieList, searchMovie} from "./api"
import { useEffect } from "react"

const App = () => {

  useEffect(() => {
    getMovieList()
}, [])  
  const search = (q) => {
    console.log({ q })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>P</h1>
        <input placeholder='Cari film' className='movie-search'
          onChange={({target}) => search(target.value)}
        />

        <div className="movie-container">
          <div className="movie-wrapper">
            <div className="movie-title">Contoh pertama</div>
            <img className="movie-img" src=''/>
            <div className="movie-date">09-06-2004</div>
            <div className="movie-rate">10.0</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
