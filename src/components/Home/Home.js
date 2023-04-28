import React from 'react'
import Exp_data from './Exp_data';
import Explore from './Explore';
import Holiday_data from './Holiday_data';
import Holidays from './Holidays';

const Home = () => {
  return (
    <div>
        <Explore props={Exp_data}/>
        <Holidays props={Holiday_data} />
    </div>
  )
}

export default Home