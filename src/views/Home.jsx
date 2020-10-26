import React from 'react';
import Hero from '../components/Home/Hero'
import Info from '../components/Home/Info'
import Device from '../components/Home/Device'
import Network from '../components/Home/Network'
import CardSection from '../components/Home/CardSection'
export default function Home(){
    return (
        <div>
           
            <br></br>
            <br></br>
            <br></br>
            <Hero />
            <br></br>
            <Info />
            <br></br>
            <Device />
            <br></br>
            <Network />
            <br></br>
            <CardSection />
        </div>
    )
}