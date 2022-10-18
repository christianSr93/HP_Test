import React, { useEffect } from 'react'
import './actionButtons.scss'
import PropTypes from 'prop-types'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import useActionBtns from './hooks/useActionBtns';
import AddModal from './addModal'
import FavoriteItem from '../FavoriteItem/favoriteItem';
import { useSelector } from 'react-redux'

const ActionButtons = props => {
    const {handleFavorites, handleAdd, handleClose, isOpen, isFavOpen} = useActionBtns(); 
    const favoriteChars = useSelector((state) => state.characters.favorites)
  return (
    <div>
        <div className='buttons-container d-flex justify-end mr-40'>
            <button onClick={handleFavorites} className='action-btns action-btns-left d-flex justify-center align-center'>Favoritos&nbsp; <BookmarkBorderIcon></BookmarkBorderIcon></button>
            <button onClick={handleAdd} className='action-btns action-btns-right d-flex justify-center align-center'>Agregar&nbsp; <PersonAddAlt1Icon></PersonAddAlt1Icon></button>
        </div>
        <div className={`favorites-container ${isFavOpen ? 'favorites-container-active':'favorites-container-inactive'}`}>
            <div className='item'>
                {
                    favoriteChars.map(e=>(
                        <FavoriteItem data={e}></FavoriteItem>
                    ))
                }
            </div>
        </div>
        <AddModal handleClose={handleClose} isOpen={isOpen} />
    </div>
  )
}

ActionButtons.propTypes = {}

export default ActionButtons