import { useSelector, useDispatch } from 'react-redux'
import { activeStudents, activeStaff } from '../../../AppState/appSlice'

const useFilter = () => {
    const active = useSelector((state) => state.filter)
    const dispatch = useDispatch();

    const handleClickStudents = () =>{
        dispatch(activeStudents());
    }
    const handleClickStaff = () =>{
        dispatch(activeStaff());
    }

    return {
        handleClickStudents,
        handleClickStaff,
        active
    };
};


export default useFilter;
