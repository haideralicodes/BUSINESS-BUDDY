import React from 'react';
import './Pricing.css';
import { useNavigate } from 'react-router-dom';

function Pricing() {   

  const navigate = useNavigate()

  const getStarted = ()=>{
    navigate('/Signup')
  }

  return (
    <div id="pricing" className='pricing-background'>
      <div className='pricing-wrapper'>
        <p style={{fontSize:"5.25rem", lineHeight:"0.95"}}> <span style={{fontWeight:"600", fontFamily:"anzo1"}}>upgrade for </span> <span style={{fontStyle:"italic", fontFamily:"BlindsAudience", fontSize:"500"}}>customizations</span>,</p>
        <p style={{fontSize:"5.25rem", lineHeight:"1.2"}}> <span style={{fontFamily:"BlindsAudience"}}>seamless</span> <span style={{fontStyle:"italic", fontWeight:"600", fontFamily:"anzo1", backgroundColor:"#EE64FF", paddingLeft:"10px", paddingRight:"15px", textAlign:"center"}}>scheduling</span></p>
        <br /><br /><br />
        <div className='pricing-cards'>
          <div className='pricing-card starter-card' style={{backgroundColor:"#FBFBFB"}}>
            <div className="card-content">
              <div className="card-details">
                <h3>Starter</h3>
                <h2>$9.99<span className='monthly-rate'>/month</span></h2>
              </div>
              <button style={{textTransform:"uppercase"}} onClick={getStarted} className='signup-button'>Sign up now</button>
              <ul>
                <li><span className='tick-icon'>&#10003;</span>Customizable website templates</li>
                <li><span className='tick-icon'>&#10003;</span>Basic social media scheduling</li>
                <li><span className='tick-icon'>&#10003;</span>Email Support</li>
                <li><span className='tick-icon'>&#10003;</span>1 GB Storage</li>
                <li><span className='tick-icon'>&#10003;</span>Basic support</li>
              </ul>
            </div>
          </div>

          <div className='pricing-card pro-card' style={{backgroundColor:"#FBFBFB"}}>
            <div className="card-content">
              <div className="card-details">
                <div className="special-offer">
                  <h3>Pro</h3>
                </div>
                <h2>$29.99<span className='monthly-rate'>/month</span></h2>
              </div>
              <button style={{textTransform:"uppercase", marginTop:"70px"}} onClick={getStarted} className='pro-card-signup-button'>Sign up now</button>
              <ul>
                <li><span className='tick-icon'>&#10003;</span>All features in the Starter Plan</li>
                <li><span className='tick-icon'>&#10003;</span>Advanced website customization</li>
                <li><span className='tick-icon'>&#10003;</span>Unlimited social media scheduling</li>
                <li><span className='tick-icon'>&#10003;</span>10 GB storage</li>
                <li><span className='tick-icon'>&#10003;</span>Priority support</li>
                <li><span className='tick-icon'>&#10003;</span>Advanced support</li>
                <li><span className='tick-icon'>&#10003;</span>Post and Caption Generation</li>
              </ul>
            </div>
          </div>

          <div className='pricing-card business-card' style={{backgroundColor:"#FBFBFB"}}>
            <div className="card-content">
              <div className="card-details">
                <h3>Business</h3>
                <h2>$49.99<span className='monthly-rate'>/month</span></h2>
              </div>
              <button style={{textTransform:"uppercase"}} onClick={getStarted} className='signup-button'>Sign up now</button>
              <ul>
                <li><span className='tick-icon'>&#10003;</span>Customizable website templates</li>
                <li><span className='tick-icon'>&#10003;</span>Basic social media scheduling</li>
                <li><span className='tick-icon'>&#10003;</span>Email Support</li>
                <li><span className='tick-icon'>&#10003;</span>1 GB Storage</li>
                <li><span className='tick-icon'>&#10003;</span>Basic support</li>
                <li><span className='tick-icon'>&#10003;</span>Customizable website templates</li>
                <li><span className='tick-icon'>&#10003;</span>Basic social media scheduling</li>
                <li><span className='tick-icon'>&#10003;</span>Email Support</li>
                <li><span className='tick-icon'>&#10003;</span>1 GB Storage</li>
                <li><span className='tick-icon'>&#10003;</span>Basic support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
