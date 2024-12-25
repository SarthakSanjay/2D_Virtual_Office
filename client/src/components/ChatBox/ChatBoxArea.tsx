import React from 'react'
import { IoChatbubbleEllipsesSharp, IoChatbubbles } from 'react-icons/io5'

const ChatBoxArea = ({ setOpenMainChat }: { setOpenMainChat: (v: boolean) => void }) => {
    return (
        <div className='h-[calc(100vh-4rem)] w-full border-0 flex gap-2 flex-col justify-start items-start p-2 relative'>

            <div className='h-14 w-full rounded-xl flex justify-start items-center relative hover:bg-white/15 px-2 cursor-pointer'
                onClick={() => {
                    setOpenMainChat(true)
                }}>
                <div className='h-10 w-10 rounded-full bg-blue-500 grid place-content-center text-xl'>
                    <IoChatbubbleEllipsesSharp />
                </div>
                <div className='h-full w-max px-2 flex flex-col justify-center gap-1 '>
                    <h1 className='p-0 leading-none'>chat space name</h1>
                    <p className='text-sm text-gray-400 leading-none'>recent chat</p>
                </div>
                <span className='text-sm absolute bottom-0 right-2 text-gray-400'>Sun</span>
            </div>

            <div className='h-max w-max flex flex-col items-center justify-center gap-2 absolute top-1/3 left-1/3'>

                <div className='bg-customTextGreen/25 text-customDarkGreen text-3xl h-24 w-24 rounded-full grid place-content-center'>
                    <IoChatbubbles />
                </div>
                <p>Your Inbox is empty</p>
                <button className='bg-customLightGreen text-customTextGreen rounded-lg px-4 py-2 h-10 w-max'>start chat</button>

            </div>

        </div>
    )
}

export default ChatBoxArea