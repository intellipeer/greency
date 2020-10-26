import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import {Grid,Paper,Typography,Button} from '@material-ui/core'

export default function Device(){
const [data, setData] = useState([]);
useEffect(() => {

    const fetchData = async () => {
        const result = await axios.get('https://greency-id-api.herokuapp.com/api/v1/devices');
        setData({device:result.data[0].device,moisture:result.data[0].moisture,humidity:result.data[0].humidity});
    }

    fetchData();

}, []);
    
    
    
    return (
        <div>

            <Grid container>
                <Grid item xs={12} sm={2} md={2} lg={2} xl={2} />
                <Grid item xs={12} md={8} sm={8} lg={8} xl={8}>
                    <Paper style={{padding:'20px'}}>
                        <Grid container>
                            <Grid item xs={12} md={3} sm={3} lg={3} xl={3}>
                            <Typography variant="body1" gutterBottom style={{color:'green'}}>
                                    DEVICE ID
                             </Typography>
                             <Typography variant="body1" gutterBottom >
                             {data.device}
                             </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} sm={3} lg={3} xl={3}>
                            <Typography variant="body1" gutterBottom style={{color:'green'}}>
                                LAST HUMIDITY
                             </Typography>
                             <Typography variant="body1" gutterBottom  style={{color:'red'}}>
                             {data.humidity}
                             </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} sm={3} lg={3} xl={3}>
                            <Typography variant="body1" gutterBottom style={{color:'green'}}>
                                LAST MOISTURE
                             </Typography>
                             <Typography variant="body1" gutterBottom  style={{color:'red'}}>
                             {data.moisture}
                             </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} sm={3} lg={3} xl={3} align="right">
                            <Typography variant="body1" gutterBottom style={{color:'green'}}>
                                    NAME
                             </Typography>
                             <Button style={{color:'white',backgroundColor:'green'}} variant="contained">VIEW DASHBOARD</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2} xl={2} />
            </Grid>
        </div>
    )
}