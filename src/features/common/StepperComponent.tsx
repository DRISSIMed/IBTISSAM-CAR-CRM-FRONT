import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './StepperComponent.css'
export default function StepperComponent() {
    const steps = ["Cheeck IBTISSAMCAR.com cars's ", "Chose your car easily", "Enjoy and have a great day"];
  return (
    <div className='Conatainer_Stepper'>
    <Stepper >
            {steps.map((label, index) => {  
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              return (
                <Step key={label} {...stepProps}>
               
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
    </div>
  )
}
