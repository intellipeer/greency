import React from 'react';
import {Grid,Paper,Typography,Button} from '@material-ui/core'

export default function Hero(){
    return (
        <div >
            <Grid container >
                <Grid xs={12} sm={2} md={2} xl={2} lg={2} />
                <Grid item xs={12} sm={8} md={8} xl={8} lg={8}>
                    <Paper style={{backgroundColor:'white',padding:'20px'}}>
                        <div>
                        <Typography variant="subtitle1" gutterBottom style={{color:'green'}}>
                        Welcome to Greency
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        Greency is a simple IOT device that connect to your wifi and read the humidity values of your plant and notify you, so you can have a better way to know the needs of your plants and the best way to provide water, no more, no less
                         </Typography>
                         <Typography variant="caption" display="block" gutterBottom>
                         We still under tests and looking for our first users to get yours at home and to make part of the community
                        </Typography>
                        </div>
                        <br></br>
                        <div align="right" justify="right">
                        <Button style={{color:'green'}} variant="outlined" href="/devices">See our devices</Button>
                        <Button style={{marginLeft:'4px',color:'white',backgroundColor:'green'}} variant="contained">Signin to your account</Button>
                        <Button style={{marginLeft:'4px',color:'white',backgroundColor:'green'}} variant="contained">Create an account</Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={2} md={2} xl={2} lg={2} />
            </Grid>
        </div>
    )
}