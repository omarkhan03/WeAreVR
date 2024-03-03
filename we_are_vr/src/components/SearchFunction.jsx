import { useState } from 'react';
import Input from '@mui/material/Input';

const SearchFunction = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        // Perform search logic here
        setSearchTerm(event.target.value)
        console.log('Searching for:', searchTerm);
    };

    return (
        <div>
            <Input 
                placeholder="Enter search term" 
                onChange= {handleSearch}
                value={searchTerm}
                sx={{backgroundColor: "white", marginRight:"1rem", width:"50%"}}
            />
            {/* <Button variant="contained"  onClick={handleSearch} size='large' sx={{color:'red'}}>Search</Button> */}
        </div>
    );
};

export default SearchFunction;