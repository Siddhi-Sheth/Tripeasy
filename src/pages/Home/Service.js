import React from 'react'
import './css/Service.css'
import { useState } from 'react';


const Service = (Props) => {
  const [toggle, setToggle] = useState(false);

    const serv_data = Props.props
  return (
    <div className='Service'>
      <div className='service-item-div' >
        {serv_data.map((serv) => (
            <div key={serv.id}>
                <div className='service-item'>{serv.service}
                <span class="material-symbols-outlined service-font">{serv.icon}</span>
                </div>
            </div>
        ))}
      </div>
      <div className='more-btn'>
      <button onClick={() => setToggle(!toggle)} class='navbar-toggler ml-auto hidden-sm-up float-xs-right'>
        <div className='service-item more-btn'>More
        <span class="material-symbols-outlined service-font">more_horiz</span>
        </div>
        </button>
        {toggle && 
        <div className='more-items'> 
          <div>Add a place</div>
          <div>Airlines </div>
          <div>Flights</div>
          <div>Help Center</div>
      </div>}
      </div>
    </div>
  )
}

export default Service