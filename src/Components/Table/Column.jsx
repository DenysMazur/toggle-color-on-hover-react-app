import React, { useContext, useState } from 'react'
import TableContext from '../../services/table/tableContext'

import './Column.css'

const Column = ({ dataColumn }) => {
  const [isColored, setIsColored] = useState(false)
  const {mouseEventTable} = useContext(TableContext)
  const handleMoseOver = (event) => {
    setIsColored(!isColored)
    mouseEventTable(event)
  }

  return (
    <>
      {isColored ? 
      <td className="col-primary" data-column={dataColumn} onMouseOver={handleMoseOver} /> : 
      <td data-column={dataColumn} onMouseOver={handleMoseOver} />}
    </>
  )
}

export default Column