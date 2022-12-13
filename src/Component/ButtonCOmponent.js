import React from 'react'

function ButtonCOmponent({ text, onClick }) {
    return (
        <button onClick={onClick} className="text-gray-700 bg-gradient-to-r from-sky-300 to-sky-400 px-4 py-2 rounded-xl shadow-md active:scale-90  transition duration-150 font-semibold  hover:shadow-xl text-3xl">
            {text}
        </button>
    )
}

export default ButtonCOmponent