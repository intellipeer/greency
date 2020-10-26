import React from 'react';
import {Grid} from '@material-ui/core'
import Card from './Card'
export default function CardSection(){
    return (
        <div>
            
            <Grid container justify="center" align="center">
               <Grid item xs={12} sm={2} md={2} xl={2} lg={2} />
               <Grid item  container xs={12} sm={8} md={8} xl={8} lg={8}  spacing={2}>
               <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Card title="A prototype for your plant"  desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti fuga eaque dolorum magnam quasi qui " image={require('./home.jpg')} />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Card title="Monitor your Home Garden" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti fuga eaque dolorum magnam quasi qui" image={require('./monitor.jpg')} />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Card title="Always green" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti fuga eaque dolorum magnam quasi qui" image={require('./green.jpg')} />
                </Grid>
               </Grid>
               <Grid item xs={12} sm={2} md={2} xl={2} lg={2} />
            </Grid>
        </div>
    )
}