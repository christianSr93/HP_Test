import React from 'react'
import './cards.scss';
import char from './harry.jpg';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Cards = props => {
  const { name, dateOfBirth, gender, eyeColour, hairColour, image, alive, hogwartsStudent, hogwartsStaff } = props.data;
  return ( 
    <Grid className='char_card' item xs={6}>
      <Card className='d-flex w-100' sx={{ maxWidth: 450 }}>
        <CardContent className='w-100 d-flex p-0'>
        <div className='char_img'>
            <div className='img_container'>
              <img src={image} alt="char" />
            </div>
          </div>
          <div className='char_desc'>
            <div className='desc_container'>
              <div className='card_header'>
                <p>
                  {alive ? 'VIVO':'FINADO'} / {hogwartsStudent ? 'ESTUDIANTE':(hogwartsStaff ? 'STAFF':'EXTERNO') }
                </p>
              </div>
              <div className='card_content'>
                <h2>NOMBRE: {name} </h2>
                <p>Cumpleaños: {dateOfBirth} </p>
                <p>Genero: {gender} </p>
                <p>Color de ojos: {eyeColour} </p>
                <p>Color de pelo: {hairColour} </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Grid>
  )
}

Cards.propTypes = {

}

export default Cards