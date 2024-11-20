import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const Footer = () => {
    const {tasks} = useContext(DataContext)
  return (
    <footer className='footer'>
        <p>Number of tasks: {tasks.length}</p>
    </footer>
  )
}

export default Footer