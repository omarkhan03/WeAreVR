import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import subscribedForums from '../Data/SubscribedForums';

const ProfileSearchSubcriptions = ({ barWidth, onForumChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [forums, setForums] = useState(JSON.parse(localStorage.getItem('SubscribedForums')));

    const handleForumClick = (forumName) => {
        setSearchTerm(forumName);
        onForumChange(forumName);
        setForums(JSON.parse(localStorage.getItem('SubscribedForums')));
        
      };

    
    const handleInputChange = (val) => {
        setSearchTerm(val);
        onForumChange(val);
        setForums(JSON.parse(localStorage.getItem('SubscribedForums')));
        filteredForums;
      };
      const filteredForums = forums.filter(forum => forum.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <Autocomplete
            value={searchTerm}
            onChange={(event, newValue) => handleInputChange(newValue ? newValue : '')}
            options={filteredForums.map(forums => forums.name)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search your Subscribed forums"
                    variant="outlined"
                    sx={{ backgroundColor: "white", margin: "0 1rem", width: barWidth }}
                />
            )}
            renderOption={(props, option) => {
                return (
                    <>
                    <li {...props} onClick={() => handleForumClick(option)}>
                        {option}
                    </li>
                    </>
                );
            }}
        />
    );
};

export default ProfileSearchSubcriptions;