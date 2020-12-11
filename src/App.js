import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => {
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // const openDetails = id => {
  //   setCurrentCharacter(id)
  // }

  // const closeDetails = () => {
  //   setCurrentCharacter(null)
  // }

  const StyledCharacter = styled.p`
    font-weight: ${props => props.theme.weight};
    color: #fff;
    text-shadow: 0 0 20px #ff005b;
    font-size: ${props => props.theme.fontSize};

    &:hover {
      color: ${props => props.theme.octonaryColor};
    }
  `

  const Character = props => (
    <StyledCharacter>
      {props.info.name}
    </StyledCharacter>
  )

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      {
        characters.map(char => {
          return <Character key={char.id} info={char}/>
        })
      }
    </div>
  );
}

export default App;
