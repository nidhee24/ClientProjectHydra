import React from 'react';
import {Card, CardMedia, CardContent, Typography, Paper} from '@material-ui/core';
import useStyles from './stylesRoom';
import {useState,useEffect} from 'react';
import {Grid} from '@material-ui/core';
import { TextField, Dialog, Button} from '@material-ui/core';

const DealApply= ({d}) => {
    
    const styleClasses = useStyles();
    const onSubmit2 = async (e) => {
        e.preventDefault();

        alert('applied');
    }
    return(
        <Paper>
        <Card className={styleClasses.card}>
            <CardMedia className={styleClasses.cardmedia} title={d.deal} />
            <CardContent>
            <img src={d.image} width="100%" height="250px"/>
                    <div className={styleClasses.cardcontent}>    
                   
                        <Typography variant="h5" gutterBottom>
                            {d.deal}
                        </Typography>
                    </div>
                    <div>

        <div>
            <Button variant="outlined" color="primary"  className={styleClasses.buttonDesign} onClick={ (e) => onSubmit2(e)}>Apply
             </Button>
      </div>
        
 </div>
                 
</CardContent>
</Card>
</Paper>

    )
    
    
}
export default DealApply;