import React from 'react'
import spinner from './spinner.gif'
const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="loading" />
        </div>
    )
}

export default Loader
