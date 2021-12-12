
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { FilterButton } from './FilterButton.jsx'
import { FILTER_TYPE } from '../consts/filterConsts'
import { useSelector } from 'react-redux'; //TODO



export const Filter = () => {

    const [filterState, setFilterState] = useState(FILTER_TYPE.ALL);
    const changeFilter = ((filterType) => setFilterState(filterType));

    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            {
                Object.keys(FILTER_TYPE).map((filterType) => (
                    <FilterButton
                        key={filterType} 
                        disabled={filterType === filterState}
                        clickHandler={changeFilter} 
                        filterType={filterType}/>
                ))
            }
        </ButtonGroup>
    )
}