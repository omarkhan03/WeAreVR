import { useState } from 'react';
import Input from '@mui/material/Input';

const SearchSubcriptions = ( {barWidth} ) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        // Perform search logic here
        setSearchTerm(event.target.value)
        console.log('Searching for:', searchTerm);
    };

    return (
        <div>
            <Input 
                placeholder="Search subscriptions" 
                onChange= {handleSearch}
                value={searchTerm}
                sx={{backgroundColor: "white", margin:"0 1rem", width:barWidth}}
            />
            {/* <Button variant="contained"  onClick={handleSearch} size='large' sx={{color:'red'}}>Search</Button> */}
        </div>
    );
};

export default SearchSubcriptions;