import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import './listCards.scss';
import Cards from '../Cards/cards'
import Grid from '@mui/material/Grid';
import {getCharacters} from '../../API/getCharacters';



const ListCards = props => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    let mounted = true;

    if(mounted){
      getCharacters()
      .then(data => {
        setCharacters(data)
      })
    }
    return () => mounted = false;
  }, []);

  useEffect(()=>{
    console.log("🚀 ~ file: listCards.jsx ~ line 29 ~ ListCards ~ characters", characters)
  },[characters])

  return (
    <Grid container spacing={2}>
      {characters.map(e=>(
        <Cards data={e}></Cards>
      ))}
    </Grid>
  )
}

ListCards.propTypes = {

}

export default ListCards