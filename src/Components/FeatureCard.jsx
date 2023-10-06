import React from 'react'
import './FeatureCard.css'

function FeatureCard() {
  return (
    <>
    <div style={{paddingLeft:'120px'}}>
        <h3 style={{textTransform:'uppercase', color:'#7D7C7C'}}>Stress-Free Holidays with time to fly vacation</h3>
    </div>

    <div className='feature-card-parent'>
        <div className='card-child'>
            <img className='feature-img' src='/money.png' alt='f-img-1' />
            <p className='card-ttl'>Zero Processing fees</p>
            <button className='btn-contact'>Contact Us</button>
        </div>
        <div className='card-child'>
        <img className='feature-img' src='/money2.png' alt='f-img-1' />
        <p className='card-ttl'>6 months easy EMI options available with us</p>
        <button className='btn-contact'>Contact Us</button>
        </div>
        <div className='card-child'>
        <img className='feature-img' src='/traveller.png' alt='f-img-1' />
        <p className='card-ttl'>Live young live free.</p>
        <button className='btn-contact'>Contact Us</button>
        </div>
    </div>
    </>
  )
}

export default FeatureCard