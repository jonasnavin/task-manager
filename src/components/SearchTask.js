import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const SearchTask = () => {
    const { searchTask, setSearchTask } = useContext(DataContext)
    return (
        <form
            onSubmit={e => e.preventDefault()}
            className='search-form'
        >
            <label
                htmlFor="search-task"
                className='search-label'
            >
                Search Task:
            </label>
            <br />
            <input
                type="text"
                id='search-task'
                className='search-input'
                placeholder='Search Task'
                value={searchTask}
                onChange={e => setSearchTask(e.target.value)}
            />
        </form>
    )
}

export default SearchTask