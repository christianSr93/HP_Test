import { useEffect } from "react";
import {getCharacters} from '../../../API/getCharacters';
import { useSelector, useDispatch } from 'react-redux'
import { setCharacters, setFilterCharacters } from '../../../AppState/characterSlice';

const useFilter = () => {
    const active = useSelector((state) => state.filter)
    const chars = useSelector((state) => state.characters)
    const dispatch = useDispatch();
    
    useEffect(() => {
      let mounted = true;
      if(mounted){
        getCharacters()
        .then(data => {
          dispatch(setCharacters(data));
        })
      }
      return () => mounted = false;
    }, [dispatch]);
  
    useEffect(() => {
        dispatch(setFilterCharacters(active));
    }, [active, dispatch]);

    return {
        chars
    }
};


export default useFilter;
