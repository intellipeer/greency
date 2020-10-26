import React from 'react';

import {Grid,Typography} from '@material-ui/core'

export default function Info(){
    return (
        <div>
             <Grid container>
                 <Grid item xs={12} sm={2} md={2} xl={2} lg={2} />
                 <Grid item xs={12} sm={8} md={8} xl={8} lg={8}>
                 <Typography variant="h6" gutterBottom>
                    Devices
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                Last Greency devices created
                </Typography>
                 </Grid>
                 <Grid item xs={12} sm={2} md={2} xl={2} lg={2} />
             </Grid>
        </div>
    )
}