import React from 'react'
import Explore from './Explore';
import Holidays from './Holidays';
import Tours from './Tours';
import Donation from './Donation';
import List from './List';
import Service from './Service';
import service_data from '../../data/service_data';
import Tours_data from '../../data/Tours_data';
import Holiday_data from '../../data/Holiday_data';
import Exp_data from '../../data/Exp_data';

const Home = () => {
  return (
    <div>
        {/* <Service props={service_data}/> */}
        <Tours props={Tours_data}/> 
        <List/>
        <Donation/>
        <Explore props={Exp_data}/>
        <Holidays props={Holiday_data} />
    </div>
  )
}

export default Home