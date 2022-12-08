import React, { Component } from 'react';
import { connect } from "react-redux";
import './actionButtons.scss'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddModal from './addModal'
import FavoriteItem from '../FavoriteItem/favoriteItem';

class ActionButtonClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen : false,
            isFavOpen: false
        }
    }


    handleFavorites = () =>{
        this.setState({isFavOpen: !this.state.isFavOpen});
    }
    
    handleAdd = () =>{
        this.setState({isOpen: true});
    }

    handleClose = () =>{
        this.setState({isOpen: false});
    }

    render() {
        return (
            <div>
                <div className='buttons-container d-flex justify-end mr-40'>
                    <button onClick={this.handleFavorites} className='action-btns action-btns-left d-flex justify-center align-center'>Favoritos&nbsp; <BookmarkBorderIcon></BookmarkBorderIcon></button>
                    <button onClick={this.handleAdd} className='action-btns action-btns-right d-flex justify-center align-center'>Agregar&nbsp; <PersonAddAlt1Icon></PersonAddAlt1Icon></button>
                </div>
                <div className={`favorites-container ${this.state.isFavOpen ? 'favorites-container-active':'favorites-container-inactive'}`}>
                    <div className='item'>
                        {
                            this.props.favoriteChars.map(e=>(
                                <FavoriteItem data={e}></FavoriteItem>
                            ))
                        }
                    </div>
                </div>
                <AddModal handleClose={this.handleClose} isOpen={this.state.isOpen} />
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    favoriteChars: state.characters.favorites
});


export default connect(mapStateToProps)(ActionButtonClass);

