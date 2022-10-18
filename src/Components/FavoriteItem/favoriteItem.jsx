import React from 'react'
import PropTypes from 'prop-types'
import DeleteIcon from '@mui/icons-material/Delete';import './favoriteItem.scss'
import IconButton from '@mui/material/IconButton';
import useFavoriteItem from './hooks/useFavoriteItem';

const FavoriteItem = props => {
    const { name, image } = props.data;
    const data =  props.data;
    const { handleDelete } = useFavoriteItem( { data }); 
    return (
        <div className='item-container d-flex align-center'>
            <div className={`char_img d-flex justify-center`}>
                <div className='image-container h-100'>
                    <img src={image} alt="char" />
                </div>
            </div>
            <div className='desc-container d-flex align-center justify-around'>
                <div className={`text-container h-100 d-flex align-center`}>
                    <p>{name}</p>
                </div>
                <div className={`icon-container h-100 d-flex align-center`}>
                    <IconButton onClick={handleDelete} aria-label="delete">
                        <DeleteIcon></DeleteIcon>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

FavoriteItem.propTypes = {}

export default FavoriteItem