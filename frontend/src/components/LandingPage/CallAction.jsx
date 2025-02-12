import React from 'react'
import star from '../../assets/star.png'
import spring from '../../assets/spring.png'
import './CallAction.css'
import { useNavigate } from 'react-router-dom';

function CallAction() {

    const navigate = useNavigate()

    const getStarted = ()=>{
        navigate('/Signup')
    }

  return (
    <div id="call">
        <div className='sec'>
            <div className="b1">
                <img src={star}/>
            </div>
            <div className="b2">
                <br />
                <h1 className='actionHeading'>Sign up for free!</h1>
                <p>Your business now online! You focus on growing your business, while we work behind the scenes.</p>
                <br /><br />
                <div className="btns">
                    <button onClick={getStarted} className='btnStyling'>Get Started For Free</button>
                </div>
            </div>
            <div className="b3">
                <img src={spring}/>
            </div>
        </div>
    </div>
  )
}

export default CallAction
