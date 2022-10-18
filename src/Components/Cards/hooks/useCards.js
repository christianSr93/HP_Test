import { useSelector, useDispatch } from 'react-redux'
import { addToFavorites } from '../../../AppState/characterSlice';

const useCards = (props) => {
    const dispatch = useDispatch();
    const favoriteChars = useSelector((state) => state.characters.favorites)

    const handleFavorite = () =>{
        if(favoriteChars.length<=4){
            dispatch(addToFavorites(props))
        }else{
            alert('ya no caben')
        }
    }

    const handleIsFavorite = ()=>{
        let result;
        if(favoriteChars.length>0){
            result = favoriteChars.find(( element ) => element.name === props.data.name);
        }else{
            result = false;
        }
        return result;
    }

    return {
        handleFavorite,
        handleIsFavorite
    }
};


export default useCards;
