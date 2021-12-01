import React, { useEffect, useState } from 'react'
import './ModeOptions.css'

const ModeOptions = ({ modeSettings, getSelectedMode, resetTable }) => {
  const [value, setValue] = useState('default')
  const [isDisabledButton, setIsDisabledButton] = useState(true)

  const handleChange = (event) => {
    setValue(event.target.value)
    resetTable()
  }

  useEffect(() => {
    if (value !== 'default') {
      setIsDisabledButton(false)
    }
  }, [value]);

  const handleSubmit = (event) => {
    event.preventDefault()
    setValue('default')
    getSelectedMode(value)
    setIsDisabledButton(true)
  }

  const setOptions = () => {
    const valueArray = Object.keys(modeSettings)
    const optionsArray = valueArray.map(value => {
      return (
        <option key={value} value={value}>{value}</option>
      )
    })
    return optionsArray
  }

  return (
    <div className="ModeOptions pt-1">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <select className="custom-select" value={value} onChange={handleChange}>
            <option disabled value="default">Pick Mode</option>
            {setOptions()}
          </select>
          <div className="input-group-append">
            <input className="btn btn-primary" type="submit" value="Start" disabled={isDisabledButton} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ModeOptions