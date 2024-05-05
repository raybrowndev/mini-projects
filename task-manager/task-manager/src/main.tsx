import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import DeleteButton from './components/DeleteButton'
import Demo from './components/Demo'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* APP IMPORT */}
     <h1 className='text-2xl'>Task Manager</h1>
     <App />
     {/* COMPONENTS */}

  
    <Demo />
  </React.StrictMode>,
)
