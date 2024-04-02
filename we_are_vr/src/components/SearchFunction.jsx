import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';

const SearchFunction = ({ barWidth }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [forums, setForums] = useState(["Gorilla tag", "Beat saber", "Quest 3", "Quest 2", "GTA VI", "GTA V", "Spiderman", "valve", "MineCraft", "Fortnite", "Apex Legends"]);
    const history = useHistory();

    const handleForumClick = (forumName) => {
        const forumPaths = {
            "Gorilla tag": "/Forum",
            "Quest 3": "/Home",
            "Quest 2": "/Profile",
            "GTA VI": "/Forum",
            "GTA V": "/Forum",
            "Spiderman": "/Forum",
            "valve": "/Forum",
            "MineCraft": "/Forum",
            "Fortnite": "/Forum",
            "Apex Legends": "/Forum",
            "Beat saber": "/Forum",
            // Add the rest of the forums and their paths here
        };

        history.push(forumPaths[forumName]);
    };

    const filteredForums = forums.filter(forum => forum.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <Autocomplete
            value={searchTerm}
            onChange={(event, newValue) => setSearchTerm(newValue ? newValue : '')}
            options={filteredForums}
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