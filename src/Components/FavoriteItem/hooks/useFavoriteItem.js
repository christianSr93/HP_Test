import { useDispatch } from 'react-redux'
import { removeFromFavorites } from '../../../AppState/characterSlice';

const useFavoriteItem = (props) => {
    const dispatch = useDispatch();

    const handleDelete = () =>{
        dispatch(removeFromFavorites(props))
    }

    return {
        handleDelete
    }
};


export default useFavoriteItem;
