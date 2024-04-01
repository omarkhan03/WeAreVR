import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './homePageStyle.css';

const TrendingComponent = () => {
    // Assuming you have an array of forumInfo objects
    const forumInfo = [
        {
            id: 1,
            name: 'v/Gorilla Tag',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
            imageUrl: '../../images/vrImg.jpg',
        },
        {
            id: 2,
            name: 'v/Quest 3',
            description: 'Description 2',
            imageUrl: '../../images/vrImg.jpg',
        },
        {
            id: 3,
            name: 'v1/GTA VI',
            description: 'Description 1',
            imageUrl: '../../images/vrImg.jpg',
        },
        {
            id: 4,
            name: 'v/BeatSaber',
            description: 'Description 2',
            imageUrl: '../../images/vrImg.jpg',
        },
        {
            id: 5,
            name: 'v/Quest 2',
            description: 'Description 1',
            imageUrl: '../../images/vrImg.jpg',
        },
        {
            id: 6,
            name: 'v/valve',
            description: 'Description 2',
            imageUrl: '../../images/vrImg.jpg',
        },
    ];

    // Split the forumInfo array into chunks of 3
    const rows = [];
    for (let i = 0; i < forumInfo.length; i += 3) {
        rows.push(forumInfo.slice(i, i + 3));
    }

    return (
        <div>
            <h2>Trending Forums</h2>
            <table >
                <tbody style={{ justifyContent: 'center', alignItems: 'center', justifyItems: 'center' }}>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((info) => (
                                <td key={info.id} style={{ width: '33%', padding: '0 auto' }}>

                                    <Card
                                        sx={{
                                            maxWidth: '100%', margin: '3rem', minHeight: 200,
                                            // '&:hover': {cursor: 'pointer'}
                                        }}
                                        // onClick={() => alert('Forum Clicked')}
                                    >
                                        <CardMedia
                                            sx={{ height: 100 }}
                                            image={info.imageUrl}
                                            title={info.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ whiteSpace: 'nowrap' }}>
                                                {info.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" height={20}>
                                                {info.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrendingComponent;