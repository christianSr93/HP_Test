import React from 'react'
import './listCards.scss';
import Cards from '../Cards/cards'
import Grid from '@mui/material/Grid';
import useListCards from './hooks/useListCards';
const ListCards = props => {
 const { chars } = useListCards();

  return (
    <Grid className='p-1' container spacing={2}>
      {chars.filterCharacters.map(e=>(
        <Cards data={e}></Cards>
      ))}
    </Grid>
  )
}

export default ListCards