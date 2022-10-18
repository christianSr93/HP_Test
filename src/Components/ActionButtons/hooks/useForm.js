import { useState } from 'react';
import {addCharacter} from '../../../API/addCharacter';
import {getCharacters} from '../../../API/getCharacters';
import {saveFile} from '../../../API/saveFile';
import { useSelector, useDispatch } from 'react-redux'
import { setCharacters, setFilterCharacters } from '../../../AppState/characterSlice';
const useForm = (props) => {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [eyeColor, setEyecolor] = useState('');
    const [hairColor, setHairColor] = useState('');
    const [gender, setGender] = useState('mujer');
    const [position, setPosition] = useState('estudiante');
    const [selectedFile, setSelectedFile] = useState();
    const active = useSelector((state) => state.filter)

    const dispatch = useDispatch();

    const {handleClose} = props;
    const handleName = (event) =>{
        setName(event.target.value);
    }
    const handleBirthday = (event) =>{
        setBirthday(event.target.value);
    }

    const handleEyeColor = (event) =>{
        setEyecolor(event.target.value);
    }

    const handleHairColor = (event) =>{
        setHairColor(event.target.value);
    }
    
    const handleGender = (event) =>{
        setGender(event.target.value);
    }
    
    const handlePosition = (event) =>{
        setPosition(event.target.value);
    }

    const handlerFile = (event) => {
		setSelectedFile(event.target.files[0]);
	};

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const save = await saveFile(selectedFile);
        console.log("🚀 ~ file: useForm.js ~ line 50 ~ handleSubmit ~ save", save)
        const data = {name, dateOfBirth: birthday, eyeColour:eyeColor, hairColour: hairColor, gender, hogwartsStudent: position === 'estudiante' ? true:false, hogwartsStaff:position === 'staff' ? true:false , image: save.data.url}
        const res = await addCharacter(data);
        res.status === 200 || res.status === 201 ? alert('Se agrego correctamente.'):alert('Oops, Algo salio mal.')    
        getCharacters()
        .then(data => {
            dispatch(setCharacters(data));
            dispatch(setFilterCharacters(active));
        })
        handleClose()
    }

    return {
        handleName, 
        handleBirthday, 
        handleEyeColor, 
        handleHairColor,
        handlerFile,
        handleSubmit,
        name,
        birthday,
        eyeColor,
        hairColor,
        gender, 
        position,
        handleGender, 
        handlePosition
    };
};


export default useForm;
