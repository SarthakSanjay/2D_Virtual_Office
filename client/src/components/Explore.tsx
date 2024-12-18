import React, { useEffect, useState } from 'react'
import { slides } from '../utils/data'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'
const Explore = () => {
    const [id, setId] = useState(1)
    const [space, setSpace] = useState('')
    const { user, isAuthenticated, loginWithPopup } = useAuth0()
    const navigate = useNavigate()

    const handleCreateSpace = () => {
        if (!isAuthenticated) {
            loginWithPopup()
        } else {
            console.log('create space')
            // navigate('/app')
        }
    }

    if (isAuthenticated) {
        navigate('/app')
    }

    if (id === 4) {
        return <div className='h-screen w-screen flex justify-center items-center flex-col'>
            <h1 className='text-xl my-10'>Create a new office space for your team</h1>
            <p className='text-sm w-1/3 text-start'>Space name will appear at the end of url</p>
            <input
                className='h-10 w-1/3 border-2 border-white bg-transparent rounded-lg outline-none px-3'
                onChange={(e) => {
                    setSpace(e.target.value)
                }}
                value={space}
            />
            <div className='w-1/3 flex justify-between my-10'>
                <button
                    className='h-10 w-max px-5 rounded-lg bg-white text-black'
                    onClick={() => setId(p => p - 1)}
                >Back</button>
                <button
                    className='h-10 w-max px-5 rounded-lg bg-green-600 text-black disabled:bg-green-600/60'
                    disabled={!space}
                    onClick={handleCreateSpace}
                >Create space</button>

            </div>
        </div>
    }

    return (
        <div className='h-3/4 w-3/4 rounded-lg bg-black p-4
            space-y-10'>
            <img src={slides[id - 1].image} className='h-[80%] w-full rounded-lg' />
            <div className='h-[10%] w-full rounded-lg flex justify-between items-center '>
                <h1 className='text-xl'>{slides[id - 1].text}</h1>
                {id === 1 ?
                    <button
                        className='h-10 w-max px-5 rounded-lg bg-white text-black'
                        onClick={() => setId(p => p + 1)}
                    >Explore</button>
                    :
                    <div className='space-x-4'>
                        <button
                            className='h-10 w-max px-5 rounded-lg bg-white text-black'
                            onClick={() => setId(p => p - 1)}
                        >Prev</button>
                        <button
                            className='h-10 w-max px-5 rounded-lg bg-[#6441a5] text-white'
                            onClick={() => {
                                setId(p => p + 1)
                            }
                            }
                        >{id < 4 ? 'Next' : 'Create my office'}</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Explore
