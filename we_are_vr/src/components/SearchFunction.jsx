import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import allForums from '../Data/allForums';

const SearchFunction = ({ barWidth }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [forums, setForums] = useState(allForums); // Set initial state to allForums
    const history = useHistory();

    const handleForumClick = (forumName) => {
        const forumPaths = {
            "v/Gorilla Tag": "/Forum",
            "v/Quest 3": "/Home",
            "v/Quest 2": "/Profile",
            "v/GTA VI": "/Forum",
            "v/GTA V": "/Forum",
            "v/Spiderman": "/Forum",
            "v/valve": "/Forum",
            "v/MineCraft": "/Forum",
            "v/Fortnite": "/Forum",
            "v/Apex Legends": "/Forum",
            "v/BeatSaber": "/Forum",
            // Add the rest of the forums and their paths here
        };

        history.push(forumPaths[forumName]);
    };

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
                    <li {...props} onClick={() => handleForumClick(option)}>
                        {option}
                    </li>
                );
            }}
        />
    );
};

export default SearchFunction;