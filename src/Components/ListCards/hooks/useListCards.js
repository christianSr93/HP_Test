import { useState, useEffect } from "react";
import {getCharacters} from '../../../API/getCharacters';
import { useSelector } from 'react-redux'

const useFilter = () => {
    const [characters, setCharacters] = useState([]);
    const [filterCharacters, setFilterCharacters] = useState([]);
    const active = useSelector((state) => state.filter)
  
    useEffect(() => {
      let mounted = true;
      if(mounted){
        getCharacters()
        .then(data => {
          setCharacters(data)
          setFilterCharacters(data)
        })
      }
      return () => mounted = false;
    }, []);
  
    useEffect(() => {
        const results = characters.filter(obj => {
            if(active.students){
                return obj.hogwartsStudent;
            }else if(active.staff){
                return obj.hogwartsStaff;
            }
        });
        setFilterCharacters(results);
    }, [active]);

    return {
        filterCharacters
    }
};


export default useFilter;
