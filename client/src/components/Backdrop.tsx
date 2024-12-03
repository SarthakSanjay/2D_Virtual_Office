import React, { ReactChild } from 'react'

const Backdrop = ({ children }: { children: ReactChild }) => {
    return (
        <div className='h-screen w-screen flex justify-center items-center bg-black/20'>
            {children}
        </div>
    )
}

export default Backdrop
