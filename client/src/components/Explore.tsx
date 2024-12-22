import React, { useEffect, useState } from 'react'
import { slides } from '../utils/data'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import CreateOffice from './CreateOffice'
import { MdCancel } from 'react-icons/md'

const Explore = ({ setClickedCreateSpaceBtn }: {
    setClickedCreateSpaceBtn: (value: boolean) => void
}) => {
    const [id, setId] = useState(1)
    const [space, setSpace] = useState('')
    const { user, isAuthenticated, loginWithPopup } = useAuth0()
    const navigate = useNavigate()

    const handleCreateSpace = async () => {
        if (!isAuthenticated) {
            loginWithPopup()
        } else {
            console.log('create space')
            // navigate('/app')
            await axios.post('http://localhost:3000/create_space', {
                space_name: space,
                username: user?.name,
                email: user?.email,
                image: user?.picture
            }).then(() => {
                alert('space created')
            }).catch((e) => {
                console.log(e.message)
            })
        }
    }
    //may be use useEffect 
    // if (isAuthenticated) {
    //     navigate('/app')
    // }

    if (id === 4) {
        return <CreateOffice
            setId={setId}
            setSpace={setSpace}
            space={space}
            handleCreateSpace={handleCreateSpace}
        />
    }

    return (
        <div className='h-3/4 w-3/4 rounded-lg bg-black p-4
            space-y-10 relative'>
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
            <button onClick={() => setClickedCreateSpaceBtn(false)}
                className="h-10 w-10 text-3xl rounded-full absolute top-[-15%] right-[-5%] flex justify-center items-center bg-white/25 text-black"><MdCancel /></button>

        </div>
    )
}

export default Explore
