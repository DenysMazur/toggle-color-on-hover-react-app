import React, { useEffect, useState } from 'react'
import { getMode } from '../../api/getMode'
import History from '../History'
import ModeOptions from '../ModeOptions'
import Table from '../Table'
import TableContext from '../../services/table/tableContext'
import './App.css'


const App = () => {
  const [modeData, setModeData] = useState({})
  const [mode, setMode] = useState('')
  const [history, setHistory] = useState([])

  useEffect(() => {
    (async () => {
      const data = await getMode()
      setModeData(data)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getSelectedMode = (value) => {
    setMode('')
    setMode(value)
  }

  const mouseEventTable = (event) => {
    if (event.target.hasAttribute('data-column')) {
      const newHistory = {
        id: history.length + 1,
        row: event.target.parentElement.dataset.row,
        column: event.target.dataset.column
      }

      setHistory([...history, newHistory])
    }
  }

  const resetTable = () => {
    setHistory([])
    setMode('')
  }

  return (
    <TableContext.Provider value={{ mouseEventTable }}>
      <div className="App pt-4">
        <div className="App__left-side">
          <ModeOptions modeSettings={modeData} getSelectedMode={getSelectedMode} resetTable={resetTable}/>
          {mode && <Table tableFields={modeData[mode].field} />}
        </div>
        <div className="App__history">
          <History history={history} />
        </div>
      </div>
    </TableContext.Provider>
  )
}

export default App
