import React from 'react'
import process_1 from '../../assets/salt/salt-trip-05-2022-10-1.png'
import process_2 from '../../assets/salt/salt-industry-square.png'
import process_3 from '../../assets/salt/Edible-1024x1024.png'

const SaltProcesses = () => {
  return (
    <div>
        <div className='container'>
            <div className='salt-process-title'>
                <h2>From raw salt, to processed salt</h2>
            </div>
            <div className='salt-processes-wrapper'>
                <div className='salt-process'>
                    <h4>DE-ICING SALT</h4>
                    <p>Also known as Road Salt</p>
                    <img src={process_1} alt='process' />
                </div>
                <div className='salt-process'>
                    <h4>INDUSTRIAL SALT</h4>
                    <p>Pool, Tablet, Dishwasher & Bath Salts</p>
                    <img src={process_2} alt='process' />
                </div>
                <div className='salt-process'>
                    <h4>EDIBLE SALT</h4>
                    <p>Coarse, Kitchen, Table, Extreme Fine & Light Salts </p>
                    <img src={process_3} alt='process' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaltProcesses