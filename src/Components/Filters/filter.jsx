import React from 'react'
import './filters.scss';
import useFilter from './hooks/useFilter';
import hp_logo from './hp_logo.png';
const Filter = props => {

    const {handleClickStudents, handleClickStaff, active} = useFilter();

  return (
    <div className='filter_container'>
        <div className='logo-container'>
            <img src={hp_logo} alt="char" />
            <h2 className='filter-title d-flex justify-center align-center'>Selecciona tu filtro</h2>
        </div>
        <div className='d-flex justify-evenly align-center btn-container'>
            <div className='btn'>
                <button onClick={handleClickStudents} className={`button-filter button-filter__${active.students ? 'active':'inactive'}`}>Estudiantes</button>
            </div>
            <div className='btn'>
                <button onClick={handleClickStaff} className={`button-filter button-filter__${active.staff ? 'active':'inactive'}`}>Staff</button>
            </div>
        </div>
    </div>
  )
}

Filter.propTypes = {}

export default Filter