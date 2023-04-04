import React, { useState } from 'react'

function SearchHeader({ search }) {
    const [valueInput, setValue] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault();
        search(valueInput)
    }
    const handleChange = (event) => {
        setValue(event.target.value)

    }
    return (
        <div className='border border-gray-300 rounded-md p-3 '>
            <form className='flex flex-col' onSubmit={handleFormSubmit}>
                <label>

                    What are you looking for?
                </label>
                <input value={valueInput} onChange={handleChange} className='border border-gray-700' />
            </form>
        </div>
    )
}

export default SearchHeader 