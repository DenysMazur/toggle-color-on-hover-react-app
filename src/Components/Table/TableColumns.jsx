import React from 'react'
import Column from './Column'

const TableColumns = ({ arrayOfColumns }) => {
  const getColumns = () => {
    const columns = arrayOfColumns.map(column => {
      return (
        <Column key={column} dataColumn={column} />
      )
    })
    return columns
  }
  return (
    <>
      {getColumns()}
    </>
  )
}

export default TableColumns