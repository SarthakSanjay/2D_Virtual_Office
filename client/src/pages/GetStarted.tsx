import React, { useState } from 'react'
import Backdrop from '../components/Backdrop'
import Explore from './Explore'

const GetStarted = () => {
    const [toggle, setToggle] = useState(false)
    return (<div className='h-screen w-screen flex justify-center items-center
            bg-gradient-to-r from-[#6441a5] to-[#2a0845]'>
        {!toggle ?
            <div className='flex justify-center items-center flex-col space-y-10'>
                <h1 className='text-xl'>Let's create your office</h1>
                <div className='h-[250px] w-[500px] rounded-lg bg-black'></div>
                <div className='w-full flex gap-10 items-center justify-between'>
                    <p>press button to continue</p>
                    <button
                        className='h-10 w-max px-2 rounded-lg bg-white text-black'
                        onClick={() => {
                            setToggle(!toggle)
                        }}

                    >Continue</button>
                </div>
            </div>
            :
            <Backdrop>
                <Explore />
            </Backdrop>
        }
    </div>
    )

}

export default GetStarted
