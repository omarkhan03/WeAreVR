import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './homePageStyle.css';
import { Link, useHistory } from 'react-router-dom';
import TrendingForums from '../Data/TrendingForums';
import handleForumClick from '../utils/ForumNavigation';

const TrendingComponent = () => {
    const history = useHistory();
    // Split the forumInfo array into chunks of 3
    const rows = [];
    for (let i = 0; i < TrendingForums.length; i += 3) {
        rows.push(TrendingForums.slice(i, i + 3));
    }

    return (
        <div>
            <h2 style={{margin:0}}>Trending Forums</h2>
            <table >
                <tbody style={{ justifyContent: 'center', alignItems: 'center', justifyItems: 'center'}}>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((info) => (
                                <td key={info.id} style={{ width: '33%', padding: '0 auto' }}>
                                    <Card
                                        sx={{
                                            maxWidth: '100%', margin: '2rem 3rem',  minHeight: 200,
                                        }}
                                        on onClick={() => handleForumClick(info.name, history)}
                                        style={{cursor: 'pointer'}} 
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