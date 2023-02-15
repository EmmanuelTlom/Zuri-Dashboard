import React from 'react'
import Switchcomponent from '../Switchcomponent'

function Topsettings({details}) {
  return (
    <div className='topSetting'>
        <div className='topSetting_wrap'>
            <div className="div">
                <p className='registration'>
                {details.heading}
                </p>
                <div className='platform'>
                    <p className='platform_p'>
                        {details.name}
                    </p>

                    <Switchcomponent/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Topsettings