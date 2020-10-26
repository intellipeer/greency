import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Grid,Typography,Button,Paper} from '@material-ui/core'

export default function Network(){
    const [data, setData] = useState([]);
    useEffect(async () => {
       
        
            await axios.get(
                'https://greency-id-api.herokuapp.com/api/v1/devices'
              ).then(result=>{
                  
                  setData({device:result.data[1].device,moisture:result.data[1].moisture,humidity:result.data[1].humidity});
              })
        
      });
      const timeElapsed = Date.now();
const today = new Date(timeElapsed);
    
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={2} md={2} xl={2} lg={2} />
                <Grid item xs={12} sm={8} md={8} xl={8} lg={8}>
                    <Paper style={{padding:'20px'}}>
                    <Grid container>
                            <Grid item xs={12} md={2} sm={2} lg={2} xl={2}>
                            <Typography variant="body1" gutterBottom style={{color:'green'}}>
                            NETWORK NAME
                             </Typography>
                             <Typography variant="body1" gutterBottom style={{color:'grey'}} >
                             {data.device}
                             </Typography>
                             <Typography variant="body1" gutterBottom style={{color:'grey'}} >
                             LAST CHECK
                             </Typography>
                             <Typography variant="body1" gutterBottom style={{color:'grey'}} >
                             {today.toLocaleDateString()}
                             </Typography>
                            </Grid>
                            <Grid item xs={12} md={2} sm={2} lg={2} xl={2}>
                            <Typography variant="body1" gutterBottom style={{color:'green'}}>
                            USER
                             </Typography>
                             <Typography variant="body1" gutterBottom  style={{color:'grey'}}>
                             Justin Miranda
                             </Typography>
                            </Grid>
                            <Grid item xs={12} md={2} sm={2} lg={2} xl={2}>
                            <Typography variant="body1" gutterBottom style={{color:'green'}}>
                            LAST MOISTURE
                             </Typography>
                             <Typography variant="body1" gutterBottom  style={{color:'grey'}}>
                             {data.moisture}
                             </Typography>
                            </Grid>
                            <Grid item xs={12} md={2} sm={2} lg={2} xl={2}>
                            <Typography variant="body1" gutterBottom style={{color:'green'}}>
                            LAST HUMIDITY
                             </Typography>
                             <Typography variant="body1" gutterBottom  style={{color:'red'}}>
                             {data.humidity}
                             </Typography>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4} lg={4} xl={4} align="right">
                            <Typography variant="body1" gutterBottom style={{color:'green'}}>
                                    NAME
                             </Typography>
                             <Typography variant="h4" gutterBottom>
                             My little basil
                            </Typography>
                             <Button style={{color:'white',backgroundColor:'green'}} variant="contained">VIEW DASHBOARD</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2} md={2} xl={2} lg={2} />
            </Grid>
        </div>
    )
}