import React from 'react'
import './GenerateWebsite.css'
import ScrollWeb from './ScrollWeb'

function GenerateWebsite() {
  return (
    <div id="genWeb" className='Clr'>
      <div className='boxs'>
        <h1 style={{fontSize:"90px", fontFamily:"anzo1", textTransform:"uppercase"}} className='actionHeading'>Website Generation</h1>
        <h1 style={{fontSize:"100px", fontFamily:"BlindsAudience"}} className='actionHeading'>in just <span style={{ textTransform:"uppercase", fontFamily:"BlindsAudience", fontStyle:"italic", backgroundColor:"#EE64FF", paddingLeft:"10px", paddingRight:"22px", textAlign:"center"}}>few clicks</span></h1>
        <ScrollWeb/>
      </div>
    </div>
  )
}

export default GenerateWebsite