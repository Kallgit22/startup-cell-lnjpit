import React from 'react';
import './styles/CustomVerticleStepper.css';

export default function CustomVerticleStepper({data,isLast}) {

  return (
    <div className='custom-verticle-stepper-wrapper'>
      <div className="stepper-bar">
        <div className="stepper-bar-dot"></div>
        <div className="stepper-bar-rod"></div>
        <div className={`stepper-bar-arrow ${isLast?"show":"hide"}`}>
            <div className="arrow-left-bar"></div>
            <div className="arrow-right-bar"></div>
        </div>
      </div>
      <div className="stepper-details">
        <div className="stepper-details-heading" dangerouslySetInnerHTML={{__html:data.step}}>
        </div>
        <div className="stepper-details-description" dangerouslySetInnerHTML={{__html:data.details}}>
        </div>
      </div>
    </div>
  )
}
