import React, { useEffect, useState } from 'react'
import TableColumns from './TableColumns'
import TableRow from './TableRow'
import './Table.css'

const Table = ({ tableFields }) => {
  const [tableSize, setTableSize] = useState(tableFields)

  useEffect(() => {
    setTableSize(tableFields)
  }, [tableFields])
  
  const createTable = () => {
    let arrayForTable = []
    for (let index = 0; index < tableSize; index++) {
      arrayForTable.push(index + 1)
    }
    const table = arrayForTable.map((row) => {
      return (
        <TableRow key={row} dataAttribute={row}>
          <TableColumns arrayOfColumns={arrayForTable} />
        </TableRow>
      )
    })
    return table
  }

  return (
    <table className="table mt-5">
      <tbody>        
        {createTable()}
      </tbody>
    </table>
  )
}

export default Table