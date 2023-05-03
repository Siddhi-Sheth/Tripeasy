import React from 'react'
import Main from './Main';
import Tours from './Tours';
import List from './List';
import Donation from './Donation';
import Explore from './Explore';
import Holidays from './Holidays';
import Tours_data from '../../data/Tours';
import Holiday_data from '../../data/Holiday';
import Exp_data from '../../data/Explore';

const Home = () => {
  return (
    <div>
        <Main/>
        <Tours props={Tours_data}/> 
        <List/>
        <Donation/>
        <Explore props={Exp_data}/>
        <Holidays props={Holiday_data} />
    </div>
  )
}

export default Home