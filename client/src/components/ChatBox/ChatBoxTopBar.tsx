import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { LuRefreshCw } from 'react-icons/lu'
import { RiChatNewLine } from 'react-icons/ri'

const ChatBoxTopBar = () => {
    return (
        <div className='h-16 w-full text-customTextGreen flex justify-between items-center px-2 pl-4'>

            <h1 className='text-xl'>Chat</h1>
            <div className='flex justify-between gap-1'>

                <button className="h-9 w-9 bg-customLightGreen/50 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg">
                    <LuRefreshCw />
                </button>
                <button className="h-9 w-9 bg-customLightGreen/50 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg">
                    <RiChatNewLine />
                </button>
                <button className="h-9 w-9 bg-customLightGreen/50 text-customTextGreen hover:bg-customDarkGreen hover:text-customLightGreen grid place-content-center rounded-lg">
                    <IoMdClose />
                </button>
            </div>
        </div>
    )
}

export default ChatBoxTopBar