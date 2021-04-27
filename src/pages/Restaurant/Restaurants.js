import React from 'react';
import {Card, CardMedia, CardContent, Typography, Paper} from '@material-ui/core';
import useStyles from './stylesRestaurant';


const Restaurants= ({r}) => {
    
    const styleClasses = useStyles();
    return(

        
        <Paper>
        <Card className={styleClasses.card}>
            <CardMedia className={styleClasses.cardmedia} title={r.name} />
            <CardContent>
            <img src={r.img} width="100%" height="200px"/>
                    <div className={styleClasses.cardcontent}>    
                    <Typography variant="h5" gutterBottom>
                            {r.name}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            {r.Location}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            {r.Details}
                        </Typography>
                    </div>
                 
             </CardContent>
        </Card>
    </Paper>
    
    )
}
export default Restaurants;