import React from 'react'
import icon from '../Components/assets/calculator.png'

function CalculatorNav() {
  return (
    <div className='calcnavbar'>
      <div className='iconbar'>
        <img src={icon} width='30px' height='40px' alt=''  className='icon'/>
        <h3>Calculator Project</h3>
      </div>
      <div className='author'>
        <h3>Designed by Raymond Iwobi</h3>
      </div>
        
    </div>
   
  )
}

export default CalculatorNav

