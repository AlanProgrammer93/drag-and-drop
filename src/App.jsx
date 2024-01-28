import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({
    amount: 0,
    msg: ""
  })

  const donate = () => {
    console.log(data);
  }

  const onChange = (e) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }
  return (
    <div className='container'>
      <div className='card'>
        <label>Valor</label>
        <input 
          type='number' 
          name='amount' 
          value={data.amount} 
          onChange={onChange} 
        />
        <label>Tu mensaje de la donacion</label>
        <textarea 
          name='msg' 
          value={data.msg} 
          onChange={onChange} 
        />
        <button onClick={donate}>Enviar</button>
      </div>
    </div>
  )
}

export default App
