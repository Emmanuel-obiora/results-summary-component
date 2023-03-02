import React from 'react'
import '../../style.css'

const Left = () => {

    const avgSum = JSON.parse(localStorage.getItem('average'));
    
    return (
        <section className="left">
            <p>Your Result</p>
            <div className="left-total">
                <strong>{avgSum}</strong>
                <span className='left-total_max'>of 100</span>
            </div>
            <h1>Great</h1>
            <small>You scored higher than 65% of the people who have taken these tests.</small>
        </section>
    )
}

export default Left
