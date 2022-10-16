import React from 'react'
import './cards.scss';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import IconButton from '@mui/material/IconButton';

const Cards = props => {
  const { name, dateOfBirth, gender, eyeColour, hairColour, image, alive, hogwartsStudent, hogwartsStaff, house } = props.data;
  return ( 
    <Grid className='char_card' item xs={6}>
      <Card className='d-flex w-100 b-radius-16' sx={{ maxWidth: 425 }}>
        <CardContent className='w-100 d-flex p-0'>
        <div className={`char_img ${house}`}>
            <div className={`img_container`}>
              <img src={image} alt="char" />
            </div>
          </div>
          <div className='char_desc'>
            <div className='desc_container'>
              <div className='card_header d-flex align-center justify-between'>
                <p>
                  {alive ? 'VIVO':'FINADO'} / {hogwartsStudent ? 'ESTUDIANTE':(hogwartsStaff ? 'STAFF':'EXTERNO') }
                 
                </p>
                <IconButton aria-label="delete">
                  <BookmarkBorderIcon></BookmarkBorderIcon>
                </IconButton>
              </div>
              <div className='card_content'>
                <h2> {name} </h2>
                <p><b>Cumpleaños:</b> {dateOfBirth} </p>
                <p><b>Genero:</b> {gender} </p>
                <p><b>Color de ojos:</b> {eyeColour} </p>
                <p><b>Color de pelo:</b> {hairColour} </p>
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