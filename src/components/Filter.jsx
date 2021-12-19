
import ButtonGroup from '@mui/material/ButtonGroup';
import { FilterButton } from './FilterButton.jsx'
import { FILTER_TYPE } from '../consts/filterConsts'
import { useSelector, useDispatch } from 'react-redux'; //TODO
import { changeFilter } from '../redux/todo/todoActions'
import { getFilterType } from '../redux/todo/todoSelectors'



export const Filter = () => {
    const currentFilterType = useSelector(getFilterType);
    const dispatch = useDispatch();

    const changeFilterHandler = (filterType) => { 
        dispatch(changeFilter(filterType));
    };

    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            {
                Object.keys(FILTER_TYPE).map((filterType) => (
                    <FilterButton
                        key={filterType} 
                        disabled={filterType === currentFilterType}
                        clickHandler={changeFilterHandler} 
                        filterType={filterType}/>
                ))
            }
        </ButtonGroup>
    )
}