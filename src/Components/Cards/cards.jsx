import React from 'react'
import './cards.scss';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import IconButton from '@mui/material/IconButton';
import useCards from './hooks/useCards';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import useMobile from '../../hooks/useMobile';

const Cards = props => {
  const { name, dateOfBirth, gender, eyeColour, hairColour, image, alive, hogwartsStudent, hogwartsStaff, house } = props.data;
  const data =  props.data;
  const { handleFavorite, handleIsFavorite } = useCards( { data });
  const isFavorite = handleIsFavorite();
  const isMobile = useMobile();

  const charImg = (
    <div className={`char_img ${house}`}>
      <div className={`img_container`}>
        <img src={image} alt="char" />
      </div>
    </div>
  )

  const DescContainer = () => {
    if(isMobile){
      return (
        <div className='desc_container h-100'>
          <div className='card_header h-100 d-flex direction-column'>
            <div className='title-header'>
              <h2> {name} </h2>
            </div>
            <div className='desc_header'>
              <p>
                {alive ? 'VIVO':'FINADO'} / {hogwartsStudent ? 'ESTUDIANTE':(hogwartsStaff ? 'STAFF':'EXTERNO') }
              </p>
              <IconButton onClick={handleFavorite} aria-label="delete" disabled={isFavorite}>
                {
                  isFavorite ? <BookmarkIcon></BookmarkIcon>:<BookmarkBorderIcon></BookmarkBorderIcon>
                } 
              </IconButton>
            </div>
          </div>
        </div>
      )
    }else{
      return (
        <div className='desc_container'>
          <div className='card_header d-flex align-center justify-between'>
            <p>
              {alive ? 'VIVO':'FINADO'} / {hogwartsStudent ? 'ESTUDIANTE':(hogwartsStaff ? 'STAFF':'EXTERNO') }
            </p>
            <IconButton onClick={handleFavorite} aria-label="delete" disabled={isFavorite}>
              {
                isFavorite ? <BookmarkIcon></BookmarkIcon>:<BookmarkBorderIcon></BookmarkBorderIcon>
              } 
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
      )
    }
  }

  const charDesc = (
    <div className='char_desc'>
      <DescContainer></DescContainer>
    </div>
  )

  return ( 
    <Grid className='char_card' item xs={6}>
      <Card className='d-flex w-100 b-radius-16 h-100' sx={{ maxWidth: 425 }}>
        <CardContent className={`w-100 d-flex ${isMobile && 'align-center direction-column'} p-0`}>
          {charImg}
          {charDesc}
        </CardContent>
      </Card>
    </Grid>
  )
}

Cards.propTypes = {

}

export default Cards