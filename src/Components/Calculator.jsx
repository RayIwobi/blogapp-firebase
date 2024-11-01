import React, { useState } from 'react'

function Calculator() {
    const [value, setValue] = useState('')
  return (
    <div className='calculatorbody'>
        <div className='calculator'>
        <div className='inputarea'>
            <input type='text' value={value} placeholder='0'/>
        </div>
        <div className='buttons'>
        <div className='buttoninput'>
            <input type='button' value='AC' onClick={e=>setValue('')}/>
            <input type='button' value='Del' onClick={e=>setValue(value.slice(0, -1))}/>
            <input type='button' value='.' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='/' onClick={e => setValue(value + e.target.value)}/>
        </div>

        <div className='buttoninput'>
            <input type='button' value='7' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='8' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='9' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='*' onClick={e => setValue(value + e.target.value)}/>

        </div>
        <div className='buttoninput'>
            <input type='button' value='4' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='5' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='6' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='+' onClick={e => setValue(value + e.target.value)}/>
        </div>

        <div className='buttoninput'>
            <input type='button' value='1' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='2' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='3' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='-' onClick={e => setValue(value + e.target.value)}/>
        </div>

        <div className='buttoninput'>
            <input type='button' value='0' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='00' onClick={e => setValue(value + e.target.value)}/>
            <input type='button' value='=' onClick={e=>setValue(eval(value))}/>
        </div>
        
        </div>

        </div>
    </div>
  )
}

export default Calculator
