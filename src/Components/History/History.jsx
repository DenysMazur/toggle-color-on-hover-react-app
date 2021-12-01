import React from 'react'
import './History.css'

const History = ({ history }) => {
  const createHistory = () => {
    const viewHistory = history.map(({id, row, column}) => {
      return (
        <div key={id}>
          row:{row} col:{column}
        </div>
      )
    })
    return viewHistory
  }
  return (
    <>
      <h3 className="history-header">
        Hover Squares
      </h3>
      {createHistory()}
    </>
  )
}

export default History