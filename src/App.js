import React from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { TextField, Button} from '@mui/material'

function App() {
  const [repos, setRepos] = useState({});
  const [search, setSearch] = useState();

  const fetchRepos = () => {
    axios({
      method: 'GET',
      url: `https://api.github.com/search/repositories?q=language:${search}&sort=stars&order=desc&per_page=5`
    })
      .then(res => {
          console.log(res.data);
          setRepos(res.data);
      })
      .catch(err => {
          console.error(err);
      })
  }

  return (
    <div className="App">
      <header className="App-header">        
        <p>
          SEB Code Challenge
        </p>

        <form>
          <TextField
            onChange={(evt) => {
              setSearch(evt.target.value)
            }}
          ></TextField>
          <Button
            variant="contained"
            onClick={fetchRepos} 
          >
            Search
          </Button>
        </form>
      </header>
    </div>
  );
}

export default App;
