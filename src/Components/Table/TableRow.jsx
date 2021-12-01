import React from 'react'

const TableRow = ({ children, dataAttribute }) => {
  return (
    <>
      <tr data-row={dataAttribute}>
        {children}
      </tr>
    </>
  )
}

export default TableRow