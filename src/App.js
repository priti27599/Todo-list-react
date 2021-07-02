import React, { useState } from 'react'
import './App.css'

function App() {
  const [inputData, setInputData] = useState('')
  const [items, setItems] = useState([])

  const addItem = () => {
    if (!inputData) {
      alert('add todo')
    } else {
      setItems([...items, inputData])
      setInputData('')
    }
  }

  const deleteItem = (id) => {
    const updateItems = items.filter((elem, ind) => {
      return ind !== id
    })
    setItems(updateItems)
  }

  const removeAll = () => {
    setItems([])
  }

  return (
    <div className="app">
      <div className="center">
        <br />
        <h1>ToDo List</h1>
        <br />
        <div className="addItems">
          <input
            type="text"
            placeholder="Add your todos...."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button onClick={addItem}>Add</button>
        </div>
        <div className="showItems">
          {items.map((element, index) => {
            return (
              <div className="eachItem" Key={index}>
                <h3>{element}</h3>
                <i
                  className="fas fa-trash"
                  title="Delete"
                  onClick={() => deleteItem(index)}
                ></i>
              </div>
            )
          })}
        </div>

        <div className="showItems">
          <button onClick={removeAll}>Clear All</button>
        </div>
      </div>
    </div>
  )
}

export default App
