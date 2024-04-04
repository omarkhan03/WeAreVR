import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import handleForumClick from '../../utils/ForumNavigation';

const SearchSubcriptions = ( {barWidth} ) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [forums, setForums] = useState(JSON.parse(localStorage.getItem('SubscribedForums')));

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
                    label="Subscribed forums"
                    variant="outlined"
                    sx={{backgroundColor: "lightgrey", margin:"0 1rem", width:barWidth}}
                />
            )}
            renderOption={(props, option) => {
                return (
                    <li {...props} onClick={() => handleForumClick(option,history)}>
                        {option}
                    </li>
                );
            }}
        />
    );
};

export default SearchSubcriptions;