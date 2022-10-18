import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import './addModal.scss'
import useForm from './hooks/useForm';
import useMobile from '../../hooks/useMobile';

const AddModal = props => {
    const { isOpen, handleClose } = props;
    const { name, birthday, eyeColor, hairColor,gender, position,
        handleGender, handlePosition, handleName, handleBirthday, handleEyeColor, handleHairColor, handleSubmit, handlerFile } = useForm({handleClose});
    const isMobile = useMobile();
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobile ? 250:400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 17
    };
  return (
    <div>
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box 
                sx={style}
            >
                <form className='w-100' onSubmit={handleSubmit}>
                    <div className='d-flex w-100 mb-1'>
                        <TextField
                        
                        id="outlined-error"
                        label="NOMBRE"
                        defaultValue={name}
                        onChange={handleName}
                        />
                        <TextField
                        
                        id="outlined-error-helper-text"
                        label="CUMPLEAÑOS"
                        defaultValue={birthday}
                        onChange={handleBirthday}
                        />
                    </div>
                    <div className='d-flex w-100 mb-1'>
                        <TextField
                        
                        id="filled-error"
                        label="COLOR DE OJOS"
                        defaultValue={eyeColor}
                        onChange={handleEyeColor}
                        />
                        <TextField
                        
                        id="filled-error-helper-text"
                        label="COLOR DE PELO"
                        defaultValue={hairColor}
                        onChange={handleHairColor}
                        />
                    </div>
                    <div className='w-100 d-flex mb-1'>
                        <div>
                            <FormLabel id="demo-radio-buttons-group-label">GÉNERO</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={gender}
                                onChange={handleGender}
                                name="gender"
                            >
                                <FormControlLabel value="mujer" control={<Radio />} label="Mujer" />
                                <FormControlLabel value="hombre" control={<Radio />} label="Hombre" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel id="demo-radio-buttons-group-label">POSICIÓN</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={position}
                                onChange={handlePosition}
                                name="position"
                            >
                                <FormControlLabel value="estudiante" control={<Radio />} label="Estudiante" />
                                <FormControlLabel value="staff" control={<Radio />} label="Staff" />
                            </RadioGroup>
                        </div>
                    </div>
                    <div className='mb-1'>
                        FOTOGRAFIA
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={handlerFile}/>
                            <PhotoCamera />
                        </IconButton>
                    </div>
                    <div className=' d-flex justify-center align-center'>
                        <button className='submit-btn'>GUARDAR</button>
                    </div>
                </form>
            </Box>
        </Modal>
    </div>
  )
}

AddModal.propTypes = {
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func
}

export default AddModal