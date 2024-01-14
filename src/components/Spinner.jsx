import React from 'react'
import Loading from '../assets/loading.gif'

export default function Spinner() {
    return (
        <div className="text-center">
            <img src={Loading} alt="loading" />
        </div>
    )
}
