import React from 'react'
import Task from './Task'
import { DataProvider } from '../context/DataContext'
import NewTask from './NewTask'
import SearchTask from './SearchTask'

const Main = () => {
    return (
        <main className='main'>
            <DataProvider>
                <NewTask />
                <SearchTask />
                <Task />
            </DataProvider>
        </main>
    )
}

export default Main