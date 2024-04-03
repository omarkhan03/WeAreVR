import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import allForums from '../../Data/allForums';
import handleForumClick from '../../utils/ForumNavigation';


const SearchFunction = ({ barWidth }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [forums, setForums] = useState(allForums); // Set initial state to allForums
    const history = useHistory();

    const filteredForums = forums.filter(forum => forum.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <Autocomplete
            value={searchTerm}
            onChange={(event, newValue) => setSearchTerm(newValue ? newValue : '')}
            options={filteredForums.map(forums => forums.name)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search for forums"
                    variant="outlined"
                    sx={{backgroundColor: "white", margin:"0 1rem", width:barWidth}}
                />
            )}
            renderOption={(props, option) => {
                return (
                    <li {...props} onClick={() => handleForumClick(option, history)}>
                        {option}
                    </li>
                );
            }}
        />
    );
};

export default SearchFunction;