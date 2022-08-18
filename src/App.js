
import './App.css';
import Movies from './components/Movies';
import React ,{useState} from 'react';
import data from './datas'
import Search from './components/Search';

function App() {
  const [movies, setMovies] = useState(data)
  console.log(movies)
  const [text, setText] = useState("")

  return (
    <div className="App">
      <Search text={text} setText={setText} />
    <Movies  movie={movies.filter(el=>el.nameMovie.toLowerCase().includes(text.toLowerCase()))}/>
    </div>
  );
}

export default App;
