import React from 'react'
import PropTypes from 'prop-types'
import './filters.scss';
import useFilter from './hooks/useFilter';

const Filter = props => {

    const {handleClickStudents, handleClickStaff, active} = useFilter();

  return (
    <div className='filter_container'>
        <h2 className='filter-title d-flex justify-center align-center'>Selecciona tu filtro</h2>
        <div className='d-flex justify-evenly align-center'>
            <div>
                <button onClick={handleClickStudents} className={`button-filter button-filter__${active.students ? 'active':'inactive'}`}>Estudiantes</button>
            </div>
            <div>
                <button onClick={handleClickStaff} className={`button-filter button-filter__${active.staff ? 'active':'inactive'}`}>Staff</button>
            </div>
        </div>
    </div>
  )
}

Filter.propTypes = {}

export default Filter