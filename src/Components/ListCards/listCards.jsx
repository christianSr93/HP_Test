import React from 'react'
import './listCards.scss';
import Cards from '../Cards/cards'
import Grid from '@mui/material/Grid';
import useListCards from './hooks/useListCards';
const ListCards = props => {
 const {filterCharacters} = useListCards();

  return (
    <Grid container spacing={2}>
      {filterCharacters.map(e=>(
        <Cards data={e}></Cards>
      ))}
    </Grid>
  )
}

export default ListCards