import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Box, Typography, List, ListItem, TextField, Button} from '@mui/material'

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
    <Box className="App">
      <header className="App-header">        
        <Typography variant="h4">
          SEB Code Challenge
        </Typography>
        <form>
          <TextField
            onChange={(evt) => {
              setSearch(evt.target.value)
            }}
          ></TextField>

          <Button
            sx={{m:1}}
            variant="contained"
            onClick={fetchRepos} 
          >
            Search
          </Button>
          
        </form>
        <Typography 
          fontWeight="bold"
          sx={{p:1}}
        >Name and Star Count</Typography>
        <List>
          {repos.items && repos.items.map(repo => (
            <ListItem>
              <Typography sx={{p:1}}>{repo.name}</Typography>
              <Typography sx={{p:1}}>{repo.stargazers_count}</Typography>
            </ListItem>
          ))}
        </List>
      </header>
    </Box>
  );
}

export default App;
