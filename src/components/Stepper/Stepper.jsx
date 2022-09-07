import React from "react"
import "./stepper.css"
import {TiTick} from 'react-icons/ti'
export function Stepper() {
  const steps = ['Customer Info', 'Shipping Info', 'Payment']
  const [currentStep, setCurrentStep] = React.useState(1)
  const [complete, setComplete] = React.useState(false)

  return (
    <>
      <div className="flex justify-between">
        {
          steps?.map((step,i) => (
            
            <div 
              key={i} 
              className={`step-item ${currentStep === i+1 && "active" } ${(i +1 < currentStep || complete) && 'complete'}`}
            >
              <div className="step">{
                (i +1 < currentStep || complete) ? <TiTick size={24} /> : i + 1 
              }</div>
              <p className="text-gray-500">{step}</p>
            </div>
          ))
        }
      </div>
      {
        !complete && <button 
        className="btn" 
        onClick={() => {
          currentStep === steps.length
          ? setComplete(true)
          : setCurrentStep((prev) => prev +1)
        }}
      >
        {currentStep === steps.length ? 'Finish' : "Next"}
      </button>
      }
    </>
  )
}