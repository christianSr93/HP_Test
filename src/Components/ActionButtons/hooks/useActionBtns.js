import { useState } from 'react';
const useActionBtns = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFavOpen, setIsFavOpen] = useState(false);


    const handleFavorites = () =>{
        setIsFavOpen(state => !state);
    }
    
    const handleAdd = () =>{
        setIsOpen(true);
    }

    const handleClose = () =>{
        setIsOpen(false);
    }

    return {
        handleFavorites,
        handleAdd,
        handleClose,
        isOpen,
        isFavOpen
    };
};


export default useActionBtns;
